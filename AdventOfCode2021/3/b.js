// this is just a brute force solution
// TODO: could refactor filter methods into 1 that takes parameter for either most/least common treatments
const { testInput, myInput } = require('./data.js');

console.log(b(testInput));


function b(input) {
    let co2 = filterCO2(input);
    let oxygen = filterOxygen(input);

    // parseInt(string, radix) converts bit string to 2-digit decimal
    return parseInt(co2, 2) * parseInt(oxygen, 2);
}

function filterCO2(input) {
    for (let i = 0; i < input[0].length; i++) {
        
        if (input.length == 1) return input[0];

        let group = [];
        for (let I = 0; I < input.length; I++) {
            group.push(input[I][i]);
        }

        // keep most common
        if (group.filter(g => g == 0).length > group.filter(g => g == 1).length) {
            input = input.filter(bit => bit[i] == 0);
        } else {
            input = input.filter(bit => bit[i] == 1); // if values equal, keep the 1s
        }
    }
    return input[0];
}

function filterOxygen(input) {
    for (let i = 0; i < input[0].length; i++) {
        
        if (input.length == 1) return input[0];

        let group = [];
        for (let I = 0; I < input.length; I++) {
            group.push(input[I][i]);
        }

        // keep least common
        if (group.filter(g => g == 0).length > group.filter(g => g == 1).length) {
            input = input.filter(bit => bit[i] == 1);
        } else {
            input = input.filter(bit => bit[i] == 0); // if values equal, keep the 0s
        }
    }
    return input[0];
}
