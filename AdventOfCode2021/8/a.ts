import { testInput, myInput } from './data';

console.time("a");
console.log(a(testInput));
console.timeEnd("a");

function a(input: string[]) {
    let codes = input.map(i => i.split(' | ').map(ii => ii.split(' ')));

    return codes;
}
