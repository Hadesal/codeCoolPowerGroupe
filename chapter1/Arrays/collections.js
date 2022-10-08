function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TODO: Fill in some colors
let colors = ["255", "0", "0", "001"]; // you might add more elements if you want

// TODO: Fill in some fruits
let fruits = ["apple", "banana", "fries", "carrot"]; // you might add more elements if you want

//Look here we create a nice fruit
let randomColor = getRndInteger(0, colors.length-1); // see how we can get the length of a collections
let randomFruit = getRndInteger(0, fruits.length-1);

console.log("Today I would like to eat a " + colors[randomColor] + " " + fruits[randomFruit]);

// TODO: Log the length of the colors and fruits collection

// TODO: Log all elements of each collection - for this access each element of
// the array by its index
fruits.forEach((fruit, index)=> {
    fruits[index] = fruit + index;
    console.log(fruit);
});
colors.forEach(color =>{
    console.log(color);
});
// TODO: create all combinations and log them (cartesian product)

let coloredFruits = colors.concat(fruits);
console.log(coloredFruits);


// Directly access each eleent in the array through its index
 colors[0] = `220`;
 console.log(colors[0]);
 fruits[3] = `burgers`;
 console.log(fruits[3]);