const youWinString = 
[
"  /$$     /$$ /$$$$$$  /$$   /$$       /$$      /$$ /$$$$$$ /$$   /$$",
" |  $$   /$$//$$__  $$| $$  | $$      | $$  /$ | $$|_  $$_/| $$$ | $$",
"  \\  $$ /$$/| $$  \\ $$| $$  | $$      | $$ /$$$| $$  | $$  | $$$$| $$",
"   \\  $$$$/ | $$  | $$| $$  | $$      | $$/$$ $$ $$  | $$  | $$ $$ $$",
"    \\  $$/  | $$  | $$| $$  | $$      | $$$$_  $$$$  | $$  | $$  $$$$",
"     | $$   | $$  | $$| $$  | $$      | $$$/ \\  $$$  | $$  | $$\\  $$$",
"     | $$   |  $$$$$$/|  $$$$$$/      | $$/   \\  $$ /$$$$$$| $$ \\  $$",
"     |__/    \\______/  \\______/       |__/     \\__/|______/|__/  \\__/"];

const sleeptime = 60; // in ms
const CLEAR_LINE = "\r\x1b[K";

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function printRightToLeft(strToPrint)
{    
    let strToArr = [];
    
    let amountOfSpaces = process.stdout.columns-strToPrint.length; 
    
    strToArr.unshift(strToPrint);
    
    // add spaces to simulate the right to left move
    for(let i=0; i<amountOfSpaces; i++)
    {
        strToArr.unshift(" ");
    }
    
    while (strToArr.length > 1)
    {
        process.stdout.write(strToArr.join("")); // write without new line    
        await sleep(sleeptime);
        process.stdout.write(CLEAR_LINE); // delete last write
        strToArr.shift();
    }
    process.stdout.write(strToArr.join(" "));
    console.log("");
}

async function asciiPrint()
{
    for(let i=0; i<youWinString.length; i++)
    {
        await printRightToLeft(youWinString[i]);
    }
}

console.log("");
asciiPrint();