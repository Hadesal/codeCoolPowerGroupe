// only use for arrays with numbers
function isArraySorted(possibleSortedArray)
{
    if(possibleSortedArray.length === 0)
    {
        return true;
    }
    let minValue = possibleSortedArray[0];
    for(let i=1; i<possibleSortedArray.length; i++)
    {
        if(minValue > possibleSortedArray[i])
        {
            return false;
        }
        minValue = possibleSortedArray[i];
    }
    return true;
}

const weiredSentence = "  This|sentence|has|some|spaces|" +
                     "and|delimiters,|make|it" +
                     "|better|readable.              ";

// TODO: After splitting the weiredSentence by "|" use the join() method for
// arrays to make a sentence out of it


let numbersFromFifty = [];
let numbersTillFifty = [];

// TODO: save the numbers 0-99 in numbersTillFifty

// TODO: get out the last 50 numbers from numbersTillFifty and move them
// to numbersFromFifty. Also use sort() to sort the values ascending

const backToFront = "): ?ti detrever uoy erofeb ecnetnes siht daer uoy dluoC";

// TODO: Loop through the string and unshift each character one by one to
// an array. Finally make a console log about the arrays content by using
// the join() method


let numbers = [1, 8, 9, 7, 10, 4];
let sortedArr = [];


while(numbers.length > 0)
{
    //TODO: get the biggest number in numbers, splice it from there and unshift
    // it to sortedArr.




    // TODO, after above task is implemented: Think why we are using following 
    // if condition?
    if(isArraySorted(numbers))
    {
        sortedArr.unshift(numbers.join(""));
        break; // TODO: Think what this new keyword does and how it affects the while loop?
    }
}
// Here is a new technique used called ternary operator
console.log(`Does following series of numbers look sorted? ${sortedArr.join("")} ${isArraySorted(sortedArr)? "yes": "no"}`);