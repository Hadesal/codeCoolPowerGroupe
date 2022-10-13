let sum = 0;
let multiplier=1;
for(let i = 1; i <= 10; i++){
    console.log(i);
 
    //odd number finder
    if(i%3 == 0){
        console.log(`odd numbers ${i}`);

    }
    
    multiplier *= i;

    //sum of i 
    sum +=i;
}
console.log(`\n ${sum}\n${multiplier}`);
