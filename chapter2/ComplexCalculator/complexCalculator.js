const prompt = require('prompt-sync')();
const possibleMenuChoice = ["1", "2", "3", "4", "5"];

function getUserMenuChoice()
{
    console.log("Please choose from the following menu:")
    console.log("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulo");
    let userMenuCoice = prompt();
    while(!possibleMenuChoice.includes(userMenuCoice))
    {
        console.log(userMenuCoice);
        console.log("Please choose from the following menu:")
        console.log("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Modulo");
        userMenuCoice = prompt();
    }

    return userMenuCoice;
}

// If you would like to test the above function
// outcomment the next 2 lines
//let userChoice = getUserMenuChoice();
//console.log(userChoice);

// TODO: Create the function getUserInput()

// TODO: make all needed calls to run your program
// (1. get the users menuchoice, 2. get the user 
// input number twice, ...)