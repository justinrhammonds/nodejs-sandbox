const { testInput, myInput } = require('./data.js');

a(testInput).then(console.log);

async function markNumber(row, num) {
    row.splice(0, 1, 'x');
}

async function markBoards(boards, num) {
    const tasks = boards.map((board) => {
       return board.map(row => markNumber(row, num));
    });

    await Promise.all(tasks);
}

async function a(input) {
    for (let i = 0; i < input.instructions.length; i++) {
        await markBoards(input.sets, input.instructions[i]);

        for (let i = 0; i < input.sets.length; i++) {
            if (isWinner(input.sets[i])) {
                return {
                    winningNumber: input.instructions[i],
                    winningBoards: input.sets[i]
                }
            }
        }
    }
    return "Error. No winner..."
}

function isWinner(set) {
    // check all rows for match
    for (let i = 0; i < set.length; i++) {
        if (isMatch(set[i])) {
            return true;
        }
    }

    // loop over each y coord
    const columns = []; // 0,1|0,2|0,3...
    const topDownDiagonal = []; // 0,0|1,1|2,2...
    const bottomUpDiagonal = []; // 4,4|3,3|2,2...
    for (let y = 0; y < set.length; y++) {
        // loop over each x coord
        const col = [];
        for (let x = 0; x < set[0].length; x++) {
            col.push(set[y][x]);
            topDownDiagonal.push(set[y][y]); 
            bottomUpDiagonal.unshift(set[x,x]); 
        }
        columns.push(col);
    }
    // check diagonals for match
    if (isMatch(topDownDiagonal) || isMatch(bottomUpDiagonal)) return true;

    // check all columns for match
    for (let i = 0; i < columns.length; i++) {
        if (isMatch(columns[i])) {
            return true;
        }
    }

} 

function isMatch(collection) {
    // true if DOESN'T contain some item that IS NOT 'x'
    return !collection.some(item => item !== 'x');
}
