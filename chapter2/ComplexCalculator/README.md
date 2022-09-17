# Simple calculator

Implement a simple calulator which asks the user first which calculation to make and then asks for the two input numbers.


## What are you going to learn?

* How to use functions
* Get to known to functions with return values and without
* Get to known to functions with parameters and without

## Tasks

### Calculations
Implemet calculation functions.

1. Create a function `addition` which takes two parameters (numbers) and returns the sum of both
2. Create a function `subtraction` which takes two parameters (numbers) and returns the difference of both
3. Create a function `multiplication` which takes two parameters (numbers) and returns the product of both
4. Create a function `division` which takes two parameters (numbers) and returns the Quotient of both. Be aware that a division by zero should not be possible. If your function detects a divion by zero it should just return 0.
5. Create a function `modulo` which takes two parameters (numbers) and returns the result of their modulo equation. 


### Get the user choice
Call the function `getUserMenuChoice`

1. Dependent on the user choice call the related calculation function.

### Print the Menu
Create a function to print the menu

1. In the code the menu is printed twice the same way. Create a function `printMenu()` which prints a menu and call it.

### Get two input variables
Ask the user for an input of a number. Then ask the user for an input of a second number.

1. Implement the function `getUserInput` that asks the user to type in a number.
2. Check if the user input is really a number. If it is, then return it, else let the user type in again.


### Finalize
Now when you have got the function, which should be used and the two input variables, make the calculation.

1. Depending on which function from the menu was chosen call this function and pass the 2 input parameters
2. When you get the result make a console log of the equation. E.g. if `1` was chosen (Addition) and the input numbers `2` and `3`, then you should output `2+3=5`


## Hint
* For solving the task `Get two user input variables` you can use the same technique as given in the function `Print a menu`
* To check if a string is a number you might have a look to the function `isNaN(str)`
* to convert a string to a number you might check the function `parseInt(str)` (there are more solutions - check the background material for your favorite choice)

## Background Materials
* [Functions](https://javascript.info/function-basics)
* [Check if input is number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
* [Convert string to number](https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l)
