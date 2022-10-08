    const prompt = require("prompt-sync")();

    // variables are declared with "let" or "var"
    // btw. this is a comment - with comments I can explain my code to remember later, what the code does
    // TODO: change the variable values below and see how the logs to the console change
    let lastname=prompt("What is your last name: "); // this is a variable of datatype string - there is no modifier (let, var, const) - bad style
    
    let firstname=prompt("What is your first name: "); // with the let modifier we declare here a local variable (we almost always use this)
    let height=prompt("What is your height: "); // in cm - this is a variable from datatype int
    
    var weight=prompt("What is your weight: "); // in kg - with modifier var this is a global variable (unless we know what we do we never want to use this)
    
        // TODO:
    // Here are variables which have aweful names.
    // Could you rename them please and put some values there?

    let favoriteBook=prompt("What is your favorite book: ");
    let favoriteMovie= prompt("What is your favorite movie: ");
    let eatenBurgers=prompt("How many burgers did you eat? ");
     
    let age=prompt("What is your age: ");
    let isFemale=prompt("What is your gender: "); // this is a variable of datatype boolean - it is true if you are female
    if(isFemale.toLowerCase() === "female"){
        isFemale = true;
    }else isFemale = false;

    // variables that can't change the value, so they can not be changed later by coincidence
    // see how this variable is declared - only with big letters and words are seperated by "_"
    // when experience developers see this style they immediately understand, that the variable
    // represents a constant value
    const KG_TO_LBS = 2.20462262185; 
    
    // BTW. look how this variable is declared.
    // The so called camelCase is used, means
    // you start the variable name with small
    // case and for every new word in it you
    // start with big case
    const yourWeightInPounds = weight * KG_TO_LBS;

    //TODO: Change the console.log to use string literals
    console.log(`Hello ${firstname} ${lastname}`);
    console.log(`I know some things about you!`);
    console.log(`You are ${age} years old.`);
    console.log(`You are ${height} cm tall.`);
    console.log(`Your weight is ${weight} kg. This is equal to ${yourWeightInPounds} pounds.`);
    console.log(`If you are female I would print out here true, else false: ${isFemale}`);
    
    console.log("Now I will tell you your hight in meters:");
    let heightInM = height/100;
    //TODO: Change the console.log to use string literals
    console.log(`Now you are ${heightInM} meters tall.`);
    
    /*****************/
    
    //TODO: Change the console.log to use string literals
    console.log(`My favorite book is ${favoriteBook}`);
    console.log(`My favorite movie is ${favoriteMovie}`);
    console.log(`Once I was so hungry that I ate ${eatenBurgers} burgers.`);
    
    // TODO: can you declare more variables and initialize them with values which describe you?
    // TODO: try also to log those new values like above
