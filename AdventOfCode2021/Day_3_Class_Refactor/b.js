const { testInput, myInput } = require('./data.js');
const Submarine = require('./Submarine.js');

const submarine = new Submarine(testInput);
console.log(submarine.calculateLifeSupportRating());
