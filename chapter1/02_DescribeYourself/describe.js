function sleep(ms) {
return new Promise((resolve) => {
    setTimeout(resolve, ms);
});
}

// variables are declared with "let" or "var"
// btw. this is a comment - with comments I can explain my code to remember later, what the code does
// TODO: change the variable values below and see how the logs to the console change
let lastname=""; // this is a variable of datatype string
let firstname="";
let height=0; // in cm - this is a variable from datatype int
let weight=0; // in kg
let age=0;
let isFemale=true; // this is a variable of datatype boolean - it is true if you are female

//TODO: Change the console.log to use string literals
console.log("Hello " + firstname + " " + lastname);
console.log("I know some things about you!");
console.log("You are " + age + " years old.");
console.log("You are " + height + " cm tall.");
console.log("Your weight is " + weight + " kg.");
console.log("If you are female I would print out here true, else false: " + isFemale);

console.log("Now I will tell you your hight in meters:");
let heightInM = height/100;
//TODO: Change the console.log to use string literals
console.log("Now you are " + heightInM + " meters tall.");

/*****************/
// TODO:
// Here are variables which have aweful names.
// Could you rename them please and put some values there?
let x="";
let a="";
let ff=0;

//TODO: Change the console.log to use string literals
console.log("My favorite book is " + x);
console.log("My favorite movie is " + a);
console.log("Once I was so hungry that I ate " + ff + " burgers.");

// TODO: can you declare more variables and initialize them with values which describe you?
// TODO: try also to log those new values like above