function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TODO: Fill in some colors
let colors = ["", "", "", ""]; // you might add more elements if you want

// TODO: Fill in some fruits
let fruits = ["", "", "", ""]; // you might add more elements if you want

//Look here we create a nice fruit
let randomColor = getRndInteger(0, colors.length-1); // see how we can get the length of a collections
let randomFruit = getRndInteger(0, fruits.length-1);

console.log("Today I would like to eat a " + colors[randomColor] + " " + fruits[randomFruit]);

// TODO: Log the length of the colors and fruits collection

// TODO: Log all elements of each collection - for this access each element of
// the array by its index

// TODO: create all combinations and log them (cartesian product)
// Directly access each eleent in the array through its index
