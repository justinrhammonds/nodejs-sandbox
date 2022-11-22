import { testInput, myInput } from "./data";
import { summation } from "../utils";

console.time("b");
console.log(b(myInput));
console.timeEnd("b");

function b(input: number[]): number {

    let maxPosition: number = input.sort((a,b) => a + b)[0];
    let fuels: number[] = [];
    for (let i = 0; i <= maxPosition; i++) {
        let fuel = input.reduce((prev, curr) => {
            return prev + summation(Math.abs(curr - i));
        }, 0);

        fuels.push(fuel);
    }

    return fuels.sort((a, b) => a - b)[0];
    
}