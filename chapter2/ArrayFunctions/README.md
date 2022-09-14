# Arrays Arrays Arrays

For arrays there exist many useful functions, which help manipulating or further processing them. This is what we are going to do in this chapter.

## What are you going to learn?

* Modifying arrays
* Using array functions

## Tasks

### join()
The `weiredSentence` appeared again. This time we will use a different approach, to make it readable.

1. Remove the spaces from beginning and the end
2. Use the split method to get an array with all the words of the sentence
3. Use the `join()` method to bring all words together again.

### push()
Save the numbers 0-99 in the array `numbersTillFifty`. 

1. Use the `push()` function to save new values in the array.

### pop() & sort()
Oh no, we made a mistake in the last example. We saved all numbers from 0-99 in `numbersTillFifty`. But as the variable says there should be only the numbers until 50.

1. Loop certain times and `pop()` all numbers from `numbersTillFifty`. Save each number taken out this way in the array `numbersFromFifty`.
2. Use the `sort()` function to sort `numbersTillFifty` ascending.
3. Make a console log to check the arrays `numbersTillFifty` and `numbersFromFifty`.

### unshift()
You might find it difficult to read the sentence `backToFront`. Can you read the sentence after using the unshift method better?

1. Loop through the string and unshift each character one by one to an array.
2. Make a console log about the arrays content by using the join() method.

### splice()
Given is an unsorted array. We could easily sort it by cutting out always the highest element and insert it into a new one.

1. Create a loop which finds the biggest number.
2. `splice` the biggest number and `unshift` it to `sortedArr`
3. We used a `if` condition in the while loop which on the first view might not make sense. Think about why it does.
4. There is also a new keyword used called `break`. There is another keyword used in combination with loops called `continue`. Check them out in the background materials.


### Run some fun
Run the file `rightToLeft.js` and have a look how the shift() & unshift() operation could be used to simulate the effect.

## Hint
* You can pass a string to the `join()` method so the values from the array will finally be separated with this string in the return value of `join()`.
* With the `%` operator you can check, if a number is even or odd.
* For getting the biggest number you can use a similar approach like used in the function `isArraySorted`.
* For being able to splice the biggest number you need to save the index of the biggest number either!

## Background Material
<a href="https://www.javascripttutorial.net/javascript-ternary-operator/" target="_blank">JavaScript Ternary Operator</a>
<a href="https://www.w3schools.com/js/js_array_methods.asp" target="_blank">Array Functions</a>
<a href="https://www.w3schools.com/js/js_break.asp" target="_blank">Break & Continue</a>

