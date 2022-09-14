const betterFormattedSentence = "This sentence has some spaces and delimiters," +
                         " make it better readable."

function checkTheWeiredSentence(weiredSentence)
{
    if(weiredSentence === betterFormattedSentence)
    {
        return "Thank you so much for making this sentence readable!!!";
    }

    return "Your sentence is still not perfect: " + weiredSentence;
}

let famousPersons = ["Elvis Presley", "Neil Armstrong", "Ludwig van Beethoven",
 "Vincent van Gogh", "Garry Kasparov", "Michael Jordan"];

 // TODO: Print the name of the person with the longest name in the array famousPersons


 let fruitsWeHave = ["Bananas", "Apples", "Pineapples", "Watermelons", "Mangos"];

 let fruitsToCheck = "Mangos,Kiwis,Oranges,Watermelons,Coconuts,Papayas,Grapes";

 // TODO: Console log all fruits from fruitsToCheck which are not included in
 // the array fruitsWeHave


 let childrenSongText = "Old Mac Donalds had a farm, i ei i ei oh, and on his " +
                        " farm he had some pigs, i ei i ei oh, and a muh muh " +
                        " here and a muh muh there, here a muh, there a muh, " +
                        " everywhere muh muh...";

// TODO: Correct the mistake in the song text by replacing the wrong strings,
// with the right ones and console log the right text. Do not forget to sing
// it then ;)


let emailAddresses = ["superlongEmailAdRess@gmail.com", "mRdAbaliNa@smth.net", 
"welovecleancode@codecool.com", "lAsTmAiLwAsWiThOuTcAmElStYlE@cleancode.com"];

let mailsToCheck = "SUPERlongEmaiLAdRESs@GMaIL.com,MRDabaLINa@SMtH.NeT," +
                   "WELOVECLEANCODE@CODECOOL.COM,lAsTmAiLwAsWiThOuTcAmElStYlE" +
                   "@cleanCODE.COM";

// TODO: check if the mails in mailsToCheck are included in emailAddresses.
// Do not forget that the mails are not case sensitive.


let weiredSentence = "  This|sentence|has|some|spaces|" +
                     "and|delimiters,|make|it" +
                     "|better|readable.              ";

// TODO: make weiredSentence readable and call the function checkTheWeiredSentence.
// Console log the result of the function and check if the function is happy with
// your formatting

let animalMatrix = "kirqcatxui\n"+
                   "cccowjkleq\n"+
                   "rabbitiiqo\n"+
                   "pbnchicken\n"+
                   "fridogasns\n";

// TODO: slice out all animals from animalMatrix (only in rows) and log them.
