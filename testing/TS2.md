# TEST SUIT 2 #

## ToDo list - Input text field ##

#### Testing Enviroment ####
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
1. Clear the _BROWSER_ caсhe
2. Open the _BROWSER_
3. Go to _URL

### TC1 - Letters acceptance ###
**Steps**
1. Type "abcd" into the field
2. Push the "Add" button

**Expected result**
 - "abcd" is shown on the next line

### TC2 - Digits acceptance ###
**Steps**
1. Type "abc1" into the field
2. Push the "Add" button

**Expected result**
 - "abc1" is shown on the next line

### TC3 - Special characters acceptance  ###
**Steps**
1. Type "~!@#$%^&*()?>,./\<][ /" into the field
2. Push the "Add" button

**Expected result**
 - "~!@#$%^&*()?>,./\<][ /" is shown on the next line

### TC4 - html-tegs ###
**Steps**
1. Type "<form action=”http://live.hh.ru”><input type=”submit”></form>" into the field
2. Push the "Add" button

**Expected result**
 - "<form action=”http://live.hh.ru”><input type=”submit”></form>" is shown on the next line

### TC5 - SQL request ###
**Steps**
1. Type "DROP TABLE user" into the field
2. Push the "Add" button

**Expected result**
 - "DROP TABLE user" is shown on the next line

### TC6 - Script ###
**Steps**
1. Type "<script>alert(“Hello, world!”)</alert>" into the field
2. Push the "Add" button

**Expected result**
 - "<script>alert(“Hello, world!”)</alert>r" is shown on the next line

### TC7 - Input characters in a different character set ###
**Steps**
1. Type "Óèêèïåäèÿ å ìíîãîåçè÷íà åëåêòðîííà" into the field
2. Push the "Add" button

**Expected result**
 - "Óèêèïåäèÿ å ìíîãîåçè÷íà åëåêòðîííà" is shown on the next line

### TC8 - Space character in the beginning ###
**Steps**
1. Type " dsa" into the field
2. Push the "Add" button

**Expected result**
 - "dsa" is shown on the next line. The space character in the beginning of the string is cutted

### TC9 - Space character in the end ###
**Steps**
1. Type "dsa " into the field
2. Push the "Add" button

**Expected result**
 - "dsa" is shown on the next line. The space character in the end of the string is cutted

### TC10 - Space character in the middle ###
**Steps**
1. Type "dsa dsa " into the field
2. Push the "Add" button

**Expected result**
 - "dsa dsa" is shown on the next line. The space character in the middle of the string is present

### TC11 - Only space characters ###
**Steps**
1. Type four space characters  "      " into the field
2. Push the "Add" button

**Expected result**
 - A new line does not get created

### TC12 - Mandatory input ###
**Steps**
1. Leave the field empty
2. Push the "Add" button

**Expected result**
 - A new line does not get created

### TC13 - Case sensitivity ###
**Steps**
1. Type "GtRw " into the field
2. Push the "Add" button

**Expected result**
 - "GtRw" is shown on the next line.

### TC14- Numbering order ###
**Steps**
1. Type "abcd" into the field
2. Push the "Add" button
3. Inspect the list numbering

**Expected result**
 - The list numbering is ascending correctly

### TC15 - Minimum number of characters ###
**Steps**
1. Type "a" into the field
2. Push the "Add" button

**Expected result**
 - "a" is shown on the next line

### TC16 - Maximum number of characters ###
**Steps**
1. Create a long srting of at least 10000 characters
2. Paste this string into the field
3. Push the "Add" button

**Expected result**
 - Output of this string is on the next line

### TC17 - Copy menu item ###
**Steps**
1. Type "abcd" into the field
2. Highlight the "abcd" input 
3. Right-click on highlighted characters, inspect the drop-down menu

**Expected result**
 - The "Copy" menu item is avaliable

### TC18 - Cut menu item ###
**Steps**
1. Type "abcd" into the field
2. Highlight the "abcd" input
3. Right-click on highlighted characters, inspect the drop-down menu

**Expected result**
 - The "Cut" menu item is avaliable

### TC19 - Paste menu item ###
**Steps**
1. Type "abcd" into the field
2. Highlight the "abcd" input
3. Right-click on highlighted characters, inspect the drop-down menu

**Expected result**
 - The "Paste"  menu item is avaliable

### TC20 - Input text field ###
**Steps**
1. Type "abcde" into the field
2. Push the "Add" button

**Expected result**
 - The "abcde" line is added to the list and the input text field is clear for the next input

 ### TC21 - ENTER button ###
 **Steps**
 1. Type "Fhtie" into the field
 2. Push the "ENTER" on the keyboard

 **Expected result**
  - "Fhtie" is shown in the input field

### TC22 - Tab button ###
 **Steps**
 1. Type "jhys 'TAB' " into the field
 2. Type "air" into the field
 
**Expected result**
  - The input focus should shift to the "ADD" button
 
### TC23 - Input focus by default ###
 **Steps**
 1. Type "abcde" 
 
**Expected result**
  - The "abcde" is shown in the input field










