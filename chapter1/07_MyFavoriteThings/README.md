# My Favourite Things

There are so many great movies, series, books etc. around us, that it's hard to remember which are the best one's when someone asks it from us.

It's time to organise your favourite things!

## What are you going to learn?

* Objects
* Arrays
* access to values

## Tasks

### Your favourite book
Create a variable (preferably with `const` keyword): `myFavBook`. Add an object as the variable's value with the following keys: `title, author, year, description`.

### Your favourite movie
Create a variable (preferably with `const` keyword): `myFavMovie`. Add an object as the variable's value with the following keys: `title, director, year, description, actors`. The `actors` key's value should be an array which contains at least five objects with the same key's. Each object within the `actors` key's array should contains the following keys: `actorName, roleName`.

### Your favourite series
Create a variable (preferably with `const` keyword): `myFavSeries`. Add an object as the variable's value with the following keys: `title, directors, seasons, description, actors`.
The `actors`, directors and the seasons keys' value should be an array.

The `actors` array should contains at least five object with the same key's. Each object within the `actors` key's array should contains the following keys: `actorName, roleName`.

The `directors` array should contains at least one string (the name of the director).

The `seasons` array should contain at least two objects with the same key's. (If your favourite series have only one season then it could be one of course.) Each object within the `seasons` key's array should contains the following keys: `episodes` a number (of the episodes), `startYear endYear`.


### Your favourites

Create a variable (preferably with `const` keyword): `myFavs`. Add an object as the variable's value with the following keys: `book, movie, series`. Add all three previous variables as the value of these keys. (Don't copy paste them!)

### Console log some details

Console log the following values (without copy-paste-ing their value into the console log method's brackets):
* Your favourite book's author
* Your favourite movie's first actor's `roleName`
* Your favourite series's last season's `endYear`

### Console log the episodes
Console log your favourite series' last season's all episodes as numbers. (eg.: 1, 2, 3 ... 12)

### Console log the directors
Console log the directors of your favourite series if the length of the `directors` array more than one.


## Hints
* Be really careful with the syntax! Your code won't work if you miss a bracket a quote-mark or a comma.
* Use template literals for the console log's. eg:

<span style="color:grey">
console.log(`

  My favourite book's author is: ${myFavs.book.author}

`);
</span>
* Start this project from scratch!

## Background Material
[Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
[Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
