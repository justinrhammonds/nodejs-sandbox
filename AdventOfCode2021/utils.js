function splitInputString(input) {
    return input.split(/\r?\n/).filter((i) => i !== '');
}

class Coordinate {
    constructor(x,y) {
        this.X = x;
        this.Y = y;
    }
}

module.exports = { 
    splitInputString, Coordinate
}