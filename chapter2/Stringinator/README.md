# Stringinator

Now you are a real expert with functions and it is time to get known to some built in functions for strings to be able to manipulate them.

## What are you going to learn?

* Modifying Strings
* Using string functions

## Tasks

### length()
Console log the famous person with the longest name.

### split()
Console log all fruits from `fruitsToCheck` which are not included in the array `fruitsWeHave`.

1. Split all fruits in `fruitsToCheck` with the symbol `,`.
2. Check for all fruits in the resulting array if they are included in `fruitsWeHave`.

### replace()
Correct the mistake in `childrenSongText` by replacing the wrong strings, with the right ones and console log the right text. 

1. Generate a while loop that goes ahead as long as `childrenSongText` contains the wrong string, since `replace()` just replaces the first incident of the searched string.
2. Use string replace to correct the song text. BTW. the animal was correctly chosen (means something else is wrong there ;).
3. Console log the song text and sing it loud so the neighbours can hear you.
4. Put your algorithm into a function called `replaceAll()` where you pass three parameters; the string where you want to do replacements, the string you are searching for, and the string which takes place when replacing. Return the corrected string and console log it.

### toUpperCase() / toLowerCase()
Given is an array `emailAddresses`. Since email addresses are not "case sensitive", we would like to check if the email addresses in `mailsToCheck` are included in `emailAddresses`.

1. Split the email addresses in `mailsToCheck` to be able to check each email address.
2. Use the `toUpperCase()` function to make all letters of a string big case or the `toLowerCase()` function to make all letters small case.

### trim()
Try to make the `weirdSentence` readable again.

1. Use the `trim()` function to remove the unnecessary spaces.
2. Use your experience from the `replace()` task to change the `|` to ` `
3. Call the function `checkTheWeirdSentence()`, pass the corrected string and check the output of the function with a console log. If you transformed the sentence correctly it should show you a nice message.

### slice()
The `animalMatrix` contains one animal in each row. Use the `slice()` function to get them and make a console log for them.

## Hint
* String comparisons are done with `===`
* You can check if an array has an element with the `includes()` function.
```html
<span style="color:grey">
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
</span>
```
* There are more useful string functions. Check them out, they might be useful for you. Try e.g. to solve the `animalMatrix` example with the function `substring()` either.

## Background Material
* [JavaScript String methods](https://www.w3schools.com/js/js_string_methods.asp)
