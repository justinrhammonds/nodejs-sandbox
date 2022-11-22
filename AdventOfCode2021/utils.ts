function splitInputString(input: string): string[] {
  return input.split(/\r?\n/).filter((i) => i !== "");
}

function summation(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  } 

  return sum;
}

class Coordinate {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }

  X: number;
  Y: number;
}

export { splitInputString, Coordinate, summation };
