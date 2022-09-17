# Project Rewrite

This kind of exercise is a classic: your task is to reimplement some basic built-in functionalities of a language or its standard library for pedagogical reasons without using built-in functionalities or the standard library itself. Caveat: don’t use such code in your commercial projects!


## What are you going to learn?

* Practice the basics of the language.
* Get familiar with a few simple algorithms.

## Tasks

### min()
Implement the `min(x, y)` function for two integers as inputs.

1. From any two numbers, the lesser is returned.
2. No built-in functions are used.

### max()
Implement the `max(valuesList)` function for a list of numbers.

1. For any list of numbers the greatest is returned.
2. No built-in functions are used.

### len()
Implement the `length(valuesList)` function for a list of numbers or strings which returns the length of the list.

1. For any list the number of its elements is returned.
2. No built-in functions are used.

### multiply()
Implement the `multiply(x, y)` function for integer numbers as inputs. Do not use the * and / operators or any built-in functions. You can use +.

1. For any two integer inputs the returned value equals the result of `x * y`.
2. Neither `*, /` nor any built-in functions are used.

### pow()
Implement the `pow(x, y)` function for real base numbers and positive integer exponents! Do not use any built-in functions. You can use `*`.

1. For inputs from the specified domain, the returned value equals the power raised to the base number. Both the inputs and the return value must be integers. For example pow(5,3) = 5*5*5 = 125`.

2. Neither `**` nor any built-in functions are used.

### Log results
Use all implemented functions and console log their results.

## Hint
* How to look for the greatest value in a list? Iterate through the list. Keep track of the greatest value by storing it in a variable. Compare the variable at every iteration with the current list element. If the variable is smaller than the current list element - replace it. At the end of the loop it will hold the answer.
* To get a length, you can iterate and count.
* Integer multiplication is basically addition a given number of times.
* An integer power function is basically the multiplication of a given number a certain amount of times.
