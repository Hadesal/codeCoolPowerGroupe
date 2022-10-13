// const set1 = new Set([1,2,3,3,3,4,1]);
// console.log(set1);
// const arr2 = new Array(1,2,3,3,3,4,5);
// console.log(arr2);
// const arr3 = Array.from(set1);
// console.log(arr3);

// const mathScores = [39, 50, 45, 41, 50];
  
// mathScores.map((currentValue, index, array) => {
//     console.log('Current value:' + currentValue);
//     console.log('Index:' + index);
//     console.log('Array:' + array);
//     return currentValue ;
// });

// const prompt = require("prompt-sync")();
// const number = parseInt(prompt(`Enter a num: `));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series: ');
// // console.log(n1); // print 0
// // console.log(n2); 

// nextTerm = 1;

// while (nextTerm <= number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
//     console.log("N1 = "+n1);
//     console.log("n2 = " +n2);

// }
// console.log(nextTerm);


let arr = new Array();
arr.push(1,2,3,4);
console.log(arr);
arr.reduce((a,b,c) =>{
    console.log("previous :" + a);
    console.log("next :" + b);
    console.log("current : " + c);

})
