const { testInput, myInput } = require('./data.js');
const { a } = require('./a.js'); 

function b(input) {
    let chunkTotals = [];
    for (let i = 0; i + 3 <= input.length; i++) {
        let chunk = input.slice(i, i + 3);
        let total = chunk.reduce((x, y) => x + y, 0);
        chunkTotals.push(total);
    }

    return a(chunkTotals);
}

console.log(b(myInput));