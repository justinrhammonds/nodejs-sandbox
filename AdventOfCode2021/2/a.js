const { testInput, myInput } = require('./data.js');

function a(input) {
    let currentPosition = {
        horizontal: 0,
        depth: 0
    }

    for (i = 0; i < input.length; i++ ) {
        move(input[i], currentPosition);
    }

    return currentPosition.horizontal * currentPosition.depth;
}

function move(command, position) {
    if (command.direction === 'forward') {
        position.horizontal += parseInt(command.distance);
    }

    if (command.direction === 'up') {
        position.depth -= parseInt(command.distance);
    }

    if (command.direction === 'down') {
        position.depth += parseInt(command.distance);
    }
}

const commands = myInput.map(function (i) {
    const [ direction, distance ] = i.split(/\s/);
    return { direction, distance };
});

console.log(a(commands));