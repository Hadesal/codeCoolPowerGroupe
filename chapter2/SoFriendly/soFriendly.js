const prompt = require("prompt-sync")();

function sayHello(nameOfPerson)
{
    console.log(`Hello ${nameOfPerson}`);
}

// I could call the parameter here also nameOfPerson, but I just wanted to
// show you that the variable does not need to have the same name as in the
// previous function - just give it a proper name
function askHowPersonIs(nameOfAnyPerson)
{
    console.log(`${nameOfAnyPerson}, how are you today, good or awesome?`);
}

function getAnswerOfThePerson()
{
    let answer = "";

    // TODO: Get the answer of the person from the command line
    // HINT: We learned in the previous chapter how to get input
    // from the command line



    return answer;
}

let yourName = "";

sayHello(yourName);
askHowPersonIs(yourName);

let answerOfThePerson = getAnswerOfThePerson();

// TODO: Check the answer of a person
// If the answer is neither "good" nor "awesome"
// console log that you do not understand the 
// answer - else repeat the answer on the console



// TODO: Write a function that asks a person for
// his age and returns it. Check the age and make
// different console logs for the ages smaller
// equal 5, bigger 5 and smaller equal 20, bigger
// 20 and smaller equal 40, and bigger 40 - e.g.
// if age is bigger 40 you could print: "Soon you
// will be in pension - great!"
