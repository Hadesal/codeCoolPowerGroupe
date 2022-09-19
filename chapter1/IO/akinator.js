// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();

const FIGURES = [];

FIGURES.push({figName: 'bugs bunny', color: 'grey', size: 'medium'});
FIGURES.push({figName: 'dumbo', color: 'grey', size: 'large'});
FIGURES.push({figName: 'mickey', color: 'black', size: 'small'});

console.log("Please think about one of the following figures:");

for(const figure of FIGURES)
{
    console.log(figure.figName);
}

// Start your code here and ask the user what he thinks about
// E.g. does your figure have big ears? Is it grey? ...
//let name = prompt("Does your figure have big ears? ");