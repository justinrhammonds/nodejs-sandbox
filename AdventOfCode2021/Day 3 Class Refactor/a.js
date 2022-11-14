const { testInput, myInput } = require('./data.js');

function a(input) {
    let gamma = '';
    let epsilon = '';

    for (let i = 0; i < input[0].length; i++) {
        
        let group = [];
        for (let I = 0; I < input.length; I++) {
            group.push(input[I][i]);
        }

        // build the two new bit strings
        if (group.filter(g => g == 0).length > group.filter(g => g == 1).length) {
            gamma += '0';
            epsilon += '1';
        } else {
            gamma += '1';
            epsilon += '0';
        }
    }

    // parseInt(string, radix) converts bit string to 2-digit decimal
    return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

console.log(a(myInput));