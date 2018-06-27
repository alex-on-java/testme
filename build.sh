#!/bin/bash
set -xe

DOCKER_REGISTRY_HOST=$1
if [ -z "$DOCKER_REGISTRY_HOST" ]
  then
    echo "Please provide host of docker registry as first argument"
    exit 1
fi

# build frontend
cd frontend
npm install
npm run build
cd ..

# delete old public assets in backend
if [ -d "backend/src/main/resources/static" ]; then
  rm -rf backend/src/main/resources/static
fi
mkdir backend/src/main/resources/static

# copy frontend build to backend
cp -R frontend/build/* backend/src/main/resources/static

# build backend
cd backend
mvn clean package
cd ..

# build docker image
GIT_HASH=$(git log -1 --pretty=%h)
docker build -t testme:$GIT_HASH .
docker tag testme:$GIT_HASH $DOCKER_REGISTRY_HOST/testme:$GIT_HASH
docker push $DOCKER_REGISTRY_HOST/testme:$GIT_HASH