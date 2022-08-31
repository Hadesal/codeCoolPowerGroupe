# Describe yourself

Just imagine you would describe yourself. You would define properties like, name, height, weight, gender and so on. In this project you have some variables given with predefined values.


## What are you going to learn?

* How to use variables
* Descriptive names (clean coding)

## Tasks

### Run it
Run the code and see what is printed on the console.

### Express yourself
Change the content of the variables so they describe you and run your code again.

### Terrible variable names
There are some terrible variable names which do not tell you what is behind them. Try to make give them better names and have a look in the secion of clean coding what you have to take care about when choosing names for variables (descriptive names)!

### More about you
Declare further variables which describe you best

### String interpolation
You see that everywhere where `console.log` is used the variables are connected with `+`. There is a better way to output the variables using so called `string literals`. Change the logs so they include `string literals` instead of `+`.

## Hints
* `console.log()` is a function. We will learn later what functions are. Important for you for now is to know, that this function prints anything you "tell" it (what you pass in the round brackets) to the screen.
* `console.log("Hello " + firstname + " " + lastname)`with string interpolation looks like this:
```
console.log(`Hello ${firstname} ${lastname}`);
```
* There are 4 ways how to declare a variable:
  * without a modifier (no let, var or const) - bad coding style
  * let - local variable (we almost always use this)
  * var - global variable (unless we know what we do we never want to use this)
  * const - variables that can't change the value. Good as a protective measure

### Background Materials
* [Clean Coding](https://journey.code.cool/v2/learn/materials/competencies/clean-code.md)
* [String Literals/Interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [Variables in JavaScript](https://journey.code.cool/v2/learn/materials/competencies/javascript-basics/javascript-variables.md)
