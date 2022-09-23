# Formatting Code

* **Formatting = communication.**
* Good formatting is a sign of a professional. Of somebody who cares about his trade.
* Good formatting make code easy beautiful and easy to understand.

## Guidelines

* We're going for simpleness that eases understanding: `small > large` (blocks, functions, files, ...)
* **Keep lines short: 80 characters.** Break using `\` and/or `\n`.
* One statement (idea, thing) on one line.

### Braces and indentation

* Blocks. Allow for drill-down (zoom in) and roll-up (zoom out).
* **Use for all control structures,** even if optional (esp. `if`).
* After the opening `{` go to next line and start indenting.
* **Use 1 tab as indentation.**

Example:

```js
// bad
if(num<=4)console.log("not much")

// good
if (num > 5) {
    console.log("a lot");
}
```

### Distance
* **Use horizontal spaces (` `) to accentuate something** (`result=this+other` -> `result = this + other`) and/or improve readability.
* Vertical distance: **related things should be close to each other. Use `\n` also to separate different groups of lines (tasks, ideas) within the same block.**
* **Constants and modules at the top of the file**.

## Exercise

Please reformat:

```js
'use strict';
let result;

const prompt = require('prompt-sync')();

// 1. read input
// 1.1. read and validate num1
let num1 = prompt("Please provide number1: ");
if(!isNaN(num1)) { 
num1=Number(num1)
}else{ console.error(`${num1} is not a number`);
    process.exit(1);
}
// 1.2. read the operation
let op = prompt("Please provide the operation [+,-,/,*]: ");
const VALID_OP = ['+',"-",'/',"*"];
if (!VALID_OP.includes(op)){
    console.error("Not a valid operation: " + op);
    process.exit(1);
}
// 1.3. read and validate num2
let num2 = prompt("Please provide number2: ");
if(!isNaN(num2)) { 
    num2=Number(num2)
}else{ console.error(`${num2} is not a number`);
    process.exit(1);
}
// 2. execute the operation
if (op === "+") {
result = num1+num2; 
} else if(op === '-')
result = num1-num2; 
else if(op === '*')
result = num1*num2; 
else if(op === '/')
result = num1/num2; 
//output the result
console.log(`${num1}${op}${num2}=${result}`);
```

## Summary
* `small > large`, `simple > complex`
* Related things belong together
* Most important things first: 
  * description, 
  * modules, 
  * constants.
* Use horizontal whitespaces (` `) and vertical whitespaces (`\n`) to create logical structures and improve readability.
* **Use an automated tool** like [prettier](https://prettier.io)  :)

## Resources

* [Book: Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
* [airbnb JS coding style](https://github.com/airbnb/javascript)
* [plainenglish JS](https://javascript.plainenglish.io/javascript-best-practices-formatting-98573ab2a517)
* [JS Clean Code -  Vertical Formatting](https://levelup.gitconnected.com/javascript-clean-code-vertical-formatting-d15097f5f30e)
