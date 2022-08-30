// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();

const figures = [];

figures.push({figName: 'bugs bunny', color: 'grey', weight: 3});
figures.push({figName: 'dumbo', color: 'grey', weight: 100});
figures.push({figName: 'mickey', color: 'black', weight: 1});

console.log("Please think about one of the following figures:");

for(const figure of figures)
{
    console.log(figure.figName);
}

// Start your code here and ask the user what he thinks about
// E.g. does your figure have big ears? Is it grey? ...
//let name = prompt("Does your figure have big ears? ");