const { testInput, myInput } = require('./data.js');

function a(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > input[i - 1]) {
            count += 1;
        }
    }
    return count;
}

console.log(a(myInput));

module.exports = { a };