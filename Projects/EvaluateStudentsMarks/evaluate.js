function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let percentage = getRndInteger(0, 100);

// Here your code starts
// if the percentage >=50 --> console.log.....