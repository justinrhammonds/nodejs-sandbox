const { testInput, myInput } = require('./data.js');
const { isWinner, sumOfRemainingNumbers, markBoards, _markBoards } = require('./a.js');

console.time("B sync timing");
const result = b(myInput);
console.log(sumOfRemainingNumbers(result.board) * result.number);
console.timeEnd("B sync timing");


function b(input) {
    for (let numIndex = 0; numIndex < input.instructions.length; numIndex++) {

        input.sets = markBoards(input.sets, input.instructions[numIndex]);

        if (input.sets.length === 1 && isWinner(input.sets[0])) {
            return {
                number: input.instructions[numIndex],
                board: input.sets[0]
            }
        }
        
        input.sets = input.sets.filter((b) => {
            return !isWinner(b);
        });
    }

    return null;
}

//////////////// ASYNC REFACTOR
console.time("B ASYNC timing");
_b(myInput).then(result => (sumOfRemainingNumbers(result.board) * result.number)).then(console.log).then(console.timeEnd("B ASYNC timing"));

async function _b(input) {
    for (let numIndex = 0; numIndex < input.instructions.length; numIndex++) {

        // mark boards
        input.sets = await _markBoards(input.sets, input.instructions[numIndex]);

        if (input.sets.length === 1 && isWinner(input.sets[0])) {
            return {
                number: input.instructions[numIndex],
                board: input.sets[0]
            }
        }
        
        input.sets = input.sets.filter((b) => {
            return !isWinner(b);
        });
    }

    return null;
}

///////////////////////////////
