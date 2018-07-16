# TEST SUIT 1 #

## ToDo list' Module ##

#### Testing Enviroments ####
**User should be able to run the APP on platforms and browsers:**

* Windows10:
	* Google Chrome 67
	* Microsoft IE9
	* Microsoft Edge
	* Mozilla Fierfox 60

* MacOS10:
	* Safary 10
	* Google Chrome 67
	* Mozilla Fierfox 60

* Android6:
	** Google Chrome 67

* iOS11:
	* Safary 10
	* Google Chrome 67

**Variables**
 * _URL_ - url of the main page
 * _BROWSER_ - default browser for tests
 * _CORRECT_TODO_LIST_PAGE_ - current default view of the page with todo list

**Testing Enviroments**
*  http://e*.dev.testme.buyanov.ru - DEV
*  http://staging.testme.buyanov.ru - staging
*  http://live.testme.buyanov.ru - live


**Before each**
1. Clear the _BROWSER_ caсh
2. Open the _BROWSER_
3. Go to _URL

#### TC1 - Page accessibility ###
**Steps**
 1. Inspect the page 
 
**Expected result**
 - User see _CORRECT_TODO_LIST_PAGE_

#### TC2 - Header ###
**Steps**

1. Check if the Header presets at the top of the page"

**Expected result**
 - User see _CORRECT_HEADER_TODO_LIST_PAGE_

#### TC3 - Numbering ###
**Steps**

1. Check number order in numbering 

**Expected result**
 - User see -  Ascending order

#### TC4 - Numbering ###
**Steps**
1. Check the lowest value in the list

**Expected result**
 - User see - 1 as lowest value 

#### TC5 - Numbering ###
**Steps**
1. Check the highest value in the list

**Expected result**
 - User see - 3 as highest value

#### TC5 - Numbering ###
**Steps**
1. Check  if there are empty values in the numbering

**Expected result**
 - User see - no empty values

#### TC6 - Numbering ###
**Steps**
1. Check  if there are any letters in the numbering "

**Expected result**
 - User see - no letters

#### TC7 - Numbering ###
**Steps**
1. Check if there are any special characters in the numbering

**Expected result**
 - User see - no special characters

#### TC8 - Value list items ###
**Steps**
1. Check  if there are empty items in the values

**Expected result**
 - User see - no empty values

#### TC7 - Value list items ###
**Steps**
1. Check if there are any special characters in the values

**Expected result**
 - User see - no special characters

#### TC8 - Value list items ###
**Steps**
1. Check if there are any digits in the values

**Expected result**
 - User see - no digits

#### TC9 - Value list items ###
**Steps**
1. Check if the first word in the row begins with a capital letter

**Expected result**
 - User see - first word begins with a capital letter

#### TC10 - Value list items ###
**Steps**
1. Check minimum number of characters in the values

**Expected result**
 - User see - minimum namber of characters 3

#### TC11 - Value list items ###
**Steps**
1. Check maximum number of characters in the values

**Expected result**
 - User see - maximum namber of characters 4






















