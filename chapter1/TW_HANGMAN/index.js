const constants = require('./constants');
// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
//const prompt = require("prompt-sync")();
const prompt = require('prompt-sync')({sigint: true});


// Here you see an example how to get your
// constants from constants.js
// for(let figure of constants.HANGMAN_PICS)
// {
//     console.log(figure);
// }


// how to use the prompt - e.g.:
// const name = prompt('What is your name?');

//get random integer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function evaluateLives(level, indexLives) {
    switch(level) {
        case 0:
            switch(indexLives) {
                case 1:
                    indexLives += 3;
                    break;
                case 4:
                    indexLives += 2;
                    break;
                default:
                    indexLives++;
                    break;
            }
            break;

        case 1:
            switch(indexLives) {
                case 2:
                    indexLives += 2;
                    break;
                case 4:
                    indexLives += 2;
                    break;
                default:
                    indexLives++;
                    break;
            }
            break;

        default:
            indexLives++;
            break;
    }
    return indexLives;
}


function checkInput(inputString) {
    if(inputString !== ''){
        if ( (Number(inputString) >= 0 ) && (Number(inputString) < constants.WORDS_TO_GUESS.length)){
            //console.log(`Test: ${Number(inputString)}`);
            return true;
        }
        else if(inputString === 'quit'){
            return true;
        }
    }

    console.log("Invalid input!");
    return false;
}

function checkInputCharacter(inputString) {
    //check if single character
    if( inputString.length === 1 ) {
        //check if alphanumeric
        if(inputString.match(/[a-zA-Z]/)) {
            //console.log(`Test: ${inputString}`);
            return true;
        }
    }
    else if(inputString === 'quit') {
        return true;
    }

    console.log("Invalid character!");
    return false;
}

//set level
let level = 0
let input = '';
do {
    input = prompt(`Please choose a input from 0 to ${constants.WORDS_TO_GUESS.length - 1}: `);
}while (!checkInput(input))


let randomWord = '';       //randomly picked word
let wrongCharacters = [];   //previous wrong letters 
let wordStatus = [];     //status of word to guess

//initialize game
//randomly pick a word of set input
if(input !== 'quit') {
    randomWord = constants.WORDS_TO_GUESS[input][getRndInteger(0, constants.WORDS_TO_GUESS[input].length-1)];
    for(let c of randomWord)
        wordStatus.push('_');  //status at the begin
    level = Number(input);
    
}

//start game
let indexHangman = 0;   //init lives
let numTries = 0;
while(input !== 'quit') {
    console.log("\n*************************************************************");
    console.log("*************************************************************\n");
    console.log(constants.HANGMAN_PICS[indexHangman] + "               " + wordStatus.join(' ') + '\n');
    //show previous wrong letters, if exist
    if(wrongCharacters.length > 0) {
        console.log("WRONG LETTERS: " + wrongCharacters.join(' ') + '\n');
    }

    if(!wordStatus.includes('_')){
        console.log("\n\nCONGRATULATIONS, YOU HAVE WON!!");
        console.log(`It took you ${numTries} tries to guess the word.`);
  
        break;
    }

 
    if(indexHangman < (constants.HANGMAN_PICS.length - 1)) {
        input = prompt("Enter a character: ");

        //evaluate character
        if(checkInputCharacter(input)) {
            if(input !== 'quit') {
                if(randomWord.toUpperCase().includes(input.toUpperCase())) {
                    if(wordStatus.map(c => c.toUpperCase()).includes(input.toUpperCase())) {
                        console.log("-----> You have already tried the letter previously!");
                    }
                    else {
                        for(let i in randomWord) {
                            if(randomWord[i].toUpperCase() === input.toUpperCase()) {
                                wordStatus[i] = randomWord[i];  //replace '_' with correctly guessed character
                                                                //same case as randomWord
                                numTries++;     
                                                           
                            }
                        }

                    }
                }
                else if(wrongCharacters.length > 0) {
                        if(wrongCharacters.map(c => c.toUpperCase()).includes(input.toUpperCase())) {
                            console.log("-----> You have already tried the letter previously!");
                        }
                        else {
                            //add first wrong character
                            wrongCharacters.push(input);
                            indexHangman = evaluateLives(level, indexHangman);     //number of lives depending on level
                            numTries++;
                            
                          }

                }
                else {
                    //add first wrong character
                    wrongCharacters.push(input);
                    indexHangman = evaluateLives(level, indexHangman);     //number of lives depending on level
                    numTries++;

                }

            }
            else
                break;  //quit
        }
    }
    else {   //hanged!!
        console.log("\n\nYOU LOST !!!")
        console.log(`It took you ${numTries} tries to loose.`)

        break;
    }


}
if (input === 'quit') {
    console.log("\n\nGOOD-BYE!!!");
}

//console.log(`Test: ${randomWord}`);

