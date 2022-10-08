// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();

const FIGURES = [];
let figureEars;
FIGURES.push({figName: 'bugs bunny', color: 'grey', size: 'medium', figEars:'big ears'});
FIGURES.push({figName: 'dumbo', color: 'grey', size: 'large', figEars:'very big ears'});
FIGURES.push({figName: 'mickey', color: 'black', size: 'small', figEars:'rounded ears'});

console.log("Please think about one of the following figures:");


for(const figure of FIGURES)
{
    console.log(figure.figName);
}

// Start your code here and ask the user what he thinks about
console.log(`lets play a game, I should guess what is your favorite Figure!`)

let startGame = prompt("Do you want to Play ? (yes, no): ");
//checking for if the player want to run the game or not 
if(startGame.toLowerCase() === `yes`){
    console.log(`Yay, Lets start!!`);
    
    figureEars = prompt(`Does your favorite Figure has (rounded ears/ big ears/ very big ears)?: `);
// asking for what big the figure ears are
    do{

        if(figureEars.toLowerCase() === FIGURES[0].figEars || figureEars.toLowerCase() === FIGURES[1].figEars || figureEars.toLowerCase() === FIGURES[2].figEars) {
            console.log(`Hmmm, i think i am getting closer! ^_^ `);
            break;
        }else {
            console.log(`Please choose one of the following words : `);
            figureEars = prompt(`Does your favorite Figure has (rounded ears/ big ears/ very big ears)?: `);
        }

}while(figureEars.toLowerCase())

}else{
    console.log(` \n Thanks for running me \n`);
    return 0;
}
// asking for what color does the figure has 
let figureColor = prompt(`Does your favorite Figure has (black/ grey) color ?: `);


    do{

        if(figureColor.toLowerCase() === FIGURES[0].color || figureColor.toLowerCase() === FIGURES[2].color){
            console.log(`Hmmm, i think i am getting more closer! ^_^`);
            break;
        }else {
            console.log(`Please choose one of the following words : `);
            figureColor = prompt(`Does your favorite Figure has (black / grey)?: `);
        }

}while(figureColor.toLowerCase() );

//asking for what big is the figure
let figureSize= prompt(`Does your favorite Figure look (large/ small/ medium)?: `);


    do{

        if(figureSize.toLowerCase() === FIGURES[0].size || figureSize.toLowerCase() === FIGURES[1].size || figureSize.toLowerCase() === FIGURES[2].size){
            console.log(`Hmmm, maybe i know what is your favorite Figure.`);
            break;
        }else {
            console.log(`Please choose one of the following words : `);
            figureSize = prompt(`Does your favorite Figure look (large/ small/ medium) ?: `);
        }

}while(figureSize.toLowerCase() );

let figureConfirm;
//checking which figure 

if(figureColor === FIGURES[0].color && figureEars === FIGURES[0].figEars && figureSize === FIGURES[0].size){
    console.log(`Is your favorite Figure ${FIGURES[0].figName}? `);
    figureConfirm = prompt(`Please type in yes/no if guessed right?: `);

}else if(figureColor === FIGURES[1].color && figureEars === FIGURES[1].figEars && figureSize === FIGURES[1].size){
    console.log(`Is your favorite Figure ${FIGURES[1].figName}? `);
    figureConfirm = prompt(`Please type in yes/no if guessed right?: `);

}else if(figureColor === FIGURES[2].color && figureEars === FIGURES[2].figEars && figureSize === FIGURES[2].size){
    console.log(`Is your favorite Figure ${FIGURES[2].figName}? `);
    figureConfirm = prompt(`Please type in yes/no if guessed right?: `);
}else{
    console.log(`I do not know such a figure....`)
}

//asking user if the figure was checked right
do{
if(figureConfirm === `yes`){
    console.log(`Yayy, you finished the game!
    thanks for playing me !! ^_^`)
    break;
}else if(figureConfirm === `no`){
    console.log(`Oh, noo
    please start the game again if you want to play again!`);
    break;
}else{
    figureConfirm = prompt(`Please type in yes/no if guessed right?: `);
}
}while(figureConfirm.toLowerCase)
