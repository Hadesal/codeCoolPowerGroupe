const prompt = require(`prompt-sync`)();
const POSSIBLE_MENU_CHOICE = ["1","2","3","4","5"];
let userMenuChoice;
let a =0;
let b = 0;
let sum = 0;
let arr= [];
let size = 5;
let arrayf = [1,2,3,5,6,11234,51,0];
const numbers = [5, 7, 12, 15, 19];
let sizeOfArr=0;




function getUserMenuChoice()
{
    console.log("Please choose from the following menu:")
    // TODO: we print here the menu and below again. There is for sure a better
    // approach than copy-paste. Write a function for printing the menu
    console.log(`1. check smallest number \n2. Array max value checker\n3. length of array\n4. Multiply\n5. Pow Nums`);
    

   userMenuChoice = prompt();
   
   if(isNaN(userMenuChoice.valueOf())){
    console.log('u may enter a number')
}
    while (!POSSIBLE_MENU_CHOICE.includes(userMenuChoice))
    {
        console.log(`you choose : ${userMenuChoice}`);
        console.log("Please choose from the following menu:")
        console.log(`1. check smallest number \n2. Array max value checker\n3. length of array\n4. Multiply\n5. Pow Nums`);

        userMenuChoice = prompt();
    }

   
    return userMenuChoice;
}

// smaller number checker
function min(a,b){
    if(a < b){
        console.log(`${a} is smaller than ${b}`);
        return a;
    }else{
        console.log(`${b} is smaller than ${a}`);
    }
}

// smallest value of array checker
function arrChecker(numbers){

    let max = numbers[0];
    for( i in numbers){
        sizeOfArr++
    }
    for (let i = 0; i < sizeOfArr; i++) {
    
        if (numbers[i] > max) { 
        
            max = Number(numbers[i]); 
         
        }
    }
    console.log("max = " + max);
    
    
}
// Array length Checker
function length(ary){
    for(i of ary){
        sizeOfArr++;
    }
    console.log(sizeOfArr);
}

// Multiply Fun
function multiply(a,b){

    for(let i = 0; i <b; i++){
        sum +=Number(a); 
    }
    console.log(sum);

}
// pow function
function pow(a,b){
sum = a;
for(let i = 0; i <(b-1); i++){
    sum *=Number(a); 

}
console.log(sum);
}


// Asking user to choose what fun to call
getUserMenuChoice();

switch(userMenuChoice){
    case '1':
        console.log(`please enter the first number to check!`);
        a = prompt();
        console.log(`enter the second number to check!`);
        b = prompt();
        min(a,b);
        break;
    case '2':
        for(let i = 0; i < size; i++){
            arr[i] = prompt('enter values to save in the Array: ' );
            (i+1)
        }
        arrChecker(arr);
        break;
    
    case '3':
        for(let i = 0; i < size; i++){
            arr[i] = prompt('enter values to save in the Array: ' );
            (i+1)
        }
        length(arr);
        break;
    case '4':
        console.log(`please enter the first number to check!`);
        a = prompt();
        console.log(`enter the second number to check!`);
        b = prompt();
        multiply(a,b);
        break;

    case '5':
        console.log(`please enter the first number to check!`);
        a = prompt();
        console.log(`enter the second number to check!`);
        b = prompt();
        pow(a,b);
        break;


}







