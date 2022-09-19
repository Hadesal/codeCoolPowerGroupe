// This function returns you a random number
// between the min value (inclusive) and the
// max value (inclusive)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let percentage = getRndInteger(0, 100);

// Here your code starts
// TODO: if the percentage >=50 --> console.log.....
