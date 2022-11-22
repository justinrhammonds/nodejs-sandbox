import { testInput, myInput } from "./data";

console.time("a");
console.log(a(myInput));
console.timeEnd("a");

function a(input: number[]): number {

    let maxPosition: number = input.sort((a,b) => a + b)[0];
    let fuels: number[] = [];
    for (let i = 0; i <= maxPosition; i++) {

        let fuel = input.reduce((prev, curr) => {
            return prev + Math.abs(curr - i);
        }, 0);

        fuels.push(fuel);
    }

    return fuels.sort((a, b) => a - b)[0];
    
}