import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] }
  }

  componentDidMount() {
    fetch('api/items').then(response => {
      if (response.status !== 200) {
        return Promise.reject(response);
      } else {
        return Promise.resolve(response.json());
      }
    }).then(
      list => this.setState({ list }),
      e => console.error(e)
    );
  }

  createList() {
    if (this.state.list) {
      return this.state.list.map((el, i) => <li key={i}>{el}</li>)
    } else {
      return <h4>Error!</h4>
    }
  }

  addNewElement = () => {
    if (!this.inputField || !this.inputField.value) {
      return;
    }
    const newValue = this.inputField.value;
    fetch('api/items', {
      method: 'post',
      body: newValue
    }).then(response => {
      if (response.status !== 200) {
        return Promise.reject(response);
      } else {
        return Promise.resolve(response.text());
      }
    }).then(
      item => {
        this.setState({ list: [...this.state.list, item] });
        this.inputField.value = '';
      },
      e => console.error(e)
    );
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TestMe todo-list</h1>
        </header>
        <div className="App-intro">
          <ol>
            {this.createList()}
          </ol>
        </div>
        <div>
          <input type="text" ref={element => { this.inputField = element; }} />
          <button onClick={this.addNewElement}>Add</button>
        </div>
      </div>
    );
  }
}

export default App;
