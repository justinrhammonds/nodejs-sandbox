function splitInputString(input: string): string[] {
  return input.split(/\r?\n/).filter((i) => i !== "");
}

class Coordinate {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }

  X: number;
  Y: number;
}

export { splitInputString, Coordinate };
