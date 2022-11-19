const { testInput, myInput } = require('./data.js');
const { isWinner, sumOfRemainingNumbers, markBoards } = require('./a.js');

const result = b(myInput);
console.log(sumOfRemainingNumbers(result.board) * result.number);

function b(input) {
    for (let numIndex = 0; numIndex < input.instructions.length; numIndex++) {
        
        // mark boards
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
