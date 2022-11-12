const { testInput, myInput } = require('./data.js');

function b(input) {
    let currentPosition = {
        horizontal: 0,
        depth: 0,
        aim: 0
    }

    for (i = 0; i < input.length; i++ ) {
        move(input[i], currentPosition);
    }

    return currentPosition.horizontal * currentPosition.depth;
}

function move(command, position) {
    if (command.direction === 'forward') {
        position.horizontal += parseInt(command.distance);
        position.depth += position.aim * parseInt(command.distance);
    }

    if (command.direction === 'up') {
        position.aim -= parseInt(command.distance);
    }

    if (command.direction === 'down') {
        position.aim += parseInt(command.distance);
    }
}

const commands = myInput.map(function (i) {
    const [ direction, distance ] = i.split(/\s/);
    return { direction, distance };
});

console.log(b(commands));