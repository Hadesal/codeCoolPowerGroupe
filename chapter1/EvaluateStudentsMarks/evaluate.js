// This function returns you a random number
// between the min value (inclusive) and the
// max value (inclusive)


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let percentage = getRndInteger(0, 100);


console.log(percentage);
// Here your code starts
// TODO: if the percentage >=50 --> console.log.....
if(percentage >=50 && percentage <= 64)
console.log(`Congrates, You passed the exam
You got a 4`) 
else if(percentage >=65 && percentage <= 79)
console.log(`Congrates, You passed the exam
You got a 3`)
else if(percentage >=80 && percentage <= 89)
console.log(`Congrates, You passed the exam
You got a 2`)
else if(percentage >=90)
console.log(`Congrates, You passed the exam
You got a 1`)
else console.log(`We're sorry, You did not pass the exam.
You got ${percentage} percent, to pass the exam you have to get over 50 percent`)