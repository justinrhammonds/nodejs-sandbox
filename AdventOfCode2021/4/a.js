const { testInput, myInput } = require('./data.js');

console.time("A sync timing");
const result = a(myInput);
console.log(sumOfRemainingNumbers(result.board) * result.number);
console.timeEnd("A sync timing");

function a(input) {
    for (let numIndex = 0; numIndex < input.instructions.length; numIndex++) {

        // mark boards
        input.sets = markBoards(input.sets, input.instructions[numIndex]);

        let winner = getFirstWinner(input.sets);
        if (winner != null) {
            return {
                number: input.instructions[numIndex],
                board: winner
            }
        }
    }

    return null;
}

function markBoards(boards, number) {
    // mark boards
    for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {

        for (let rowIndex = 0; rowIndex < boards[boardIndex].length; rowIndex++) {
            if (boards[boardIndex][rowIndex].some(num => num == number)) {
                boards[boardIndex][rowIndex].splice(boards[boardIndex][rowIndex].findIndex(item => item == number), 1, 'x');
            }
        }
    }    
    
    return boards;
}

//////////////// ASYNC REFACTOR
console.time("A ASYNC timing");
_a(myInput).then(result => (sumOfRemainingNumbers(result.board) * result.number)).then(console.log).then(console.timeEnd("A ASYNC timing"));

async function _a(input) {
    for (let numIndex = 0; numIndex < input.instructions.length; numIndex++) {

        // mark boards
        input.sets = await _markBoards(input.sets, input.instructions[numIndex]);

        let winner = getFirstWinner(input.sets);
        if (winner != null) {
            return {
                number: input.instructions[numIndex],
                board: winner
            }
        }
    }

    return null;
}

async function _markBoards(boards, number) {
    // mark boards
    const tasks = boards.map(b => _markBoard(b, number));
    return await Promise.all(tasks);
}

async function _markBoard(board, number) {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        if (board[rowIndex].some(num => num == number)) {
            board[rowIndex].splice(board[rowIndex].findIndex(item => item == number), 1, 'x');
        }
    }

    return board;
}

///////////////////////////////

function getFirstWinner(boards) {
    for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
            // check for winner
            if (isWinner(boards[boardIndex])) {
                return boards[boardIndex];
            }
    }

    return null;
}

function isWinner(board) {
    for (let y = 0; y < board.length; y++) {
        let row = []; // 0,0 | 0,1
        let col = []; // 0,0 | 1,0
        // let topDownDiagonal = []; // 0,0 | 1,1
        // let bottomUpDiagonal = []; // 4,0 | 3,1 | 2,2
        for (let x = 0; x < board[y].length; x++) {
            row.push(board[y][x]);
            col.push(board[x][y]);
            // topDownDiagonal.push(input.sets[boardIndex][x][x]);
            // bottomUpDiagonal.push(input.sets[boardIndex][(input.sets[boardIndex][y].length - 1) - x][x])
        }

        // if is completed (doesn't contain some not equal to 'x')
        if (!row.some(num => num != 'x') ||
            !col.some(num => num != 'x')) {
            // !topDownDiagonal.some(num => num != 'x') ||
            // !bottomUpDiagonal.some(num => num != 'x')) {
            return true;
        } 
    }
    return false;
}

function sumOfRemainingNumbers(board) {
    return board.flat().filter(num => num != 'x').reduce((prev, curr) => prev + parseInt(curr), 0);
}

module.exports = { isWinner, getFirstWinner, sumOfRemainingNumbers, markBoards, _markBoards }
