function splitInputString(input) {
    return input.split(/\r?\n/).filter((i) => i !== '');
}

function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  } 

  return sum;
}

class Coordinate {
    constructor(x,y) {
        this.X = x;
        this.Y = y;
    }
}

module.exports = { 
    splitInputString, Coordinate, summation
}