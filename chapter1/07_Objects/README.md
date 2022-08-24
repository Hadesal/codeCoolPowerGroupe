# My Favourite Things

There are so many great movies, series, books etc. around us, that it's hard to remember which are the best one's when someone asks it from us.

It's time to organise your favourite things!

## What are you going to learn?

* Objects
* Arrays
* access to values

## Tasks

### Your favourite book
Create a variable (preferably with <mark>const</mark> keyword): <mark>myFavBook</mark>. Add an object as the variable's value with the following keys: <mark>title, author, year, description</mark>.

### Your favourite movie
Create a variable (preferably with <mark>const</mark> keyword): <mark>myFavMovie</mark>. Add an object as the variable's value with the following keys: <mark>title, director, year, description, actors</mark>. The <mark>actors</mark> key's value should be an array which contains at least five objects with the same key's. Each object within the <mark>actors</mark> key's array should contains the following keys: <mark>actorName, roleName</mark>.

### Your favourite series
Create a variable (preferably with <mark>const</mark> keyword): <mark>myFavSeries</mark>. Add an object as the variable's value with the following keys: <mark>title, directors, seasons, description, actors</mark>.
The <mark>actors</mark>, directors and the seasons keys' value should be an array.

The <mark>actors</mark> array should contains at least five object with the same key's. Each object within the <mark>actors</mark> key's array should contains the following keys: <mark>actorName, roleName</mark>.

The <mark>directors</mark> array should contains at least one string (the name of the director).

The <mark>seasons</mark> array should contain at least two objects with the same key's. (If your favourite series have only one season then it could be one of course.) Each object within the <mark>seasons</mark> key's array should contains the following keys: <mark>episodes</mark> a number (of the episodes), <mark>startYear endYear</mark>.


### Your favourites

Create a variable (preferably with <mark>const</mark> keyword): <mark>myFavs</mark>. Add an object as the variable's value with the following keys: <mark>book, movie, series</mark>. Add all three previous variables as the value of these keys. (Don't copy paste them!)

### Console log some details

Console log the following values (without copy-paste-ing their value into the console log method's brackets):
* Your favourite book's author
* Your favourite movie's first actor's <mark>roleName</mark>
* Your favourite series's last season's <mark>endYear</mark>

### Console log the episodes
Console log your favourite series' last season's all episodes as numbers. (eg.: 1, 2, 3 ... 12)

### Console log the directors
Console log the directors of your favourite series if the length of the <mark>directors</mark> array more than one.


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
