import { testInput, myInput } from "./data";

b(256, myInput);

// What a cool refactor to see this one go from a non-scalable solution (which I left implemented for comparison),
// to one that can scale to handle large data computation. In solution A, I conceptualized the 'fish' as an item in an array,
// and each had it's own internal lifecycle. Though when it became clear, that for solution B, this approach wasn't
// practical/scalable, the refactor grouped the fish under the 'days remaining' until spawn within the lifecycle. Doing
// this allowed us to view the items instead as a 'whole total' and just move that number around. Really NEAT!
function b(days: number, fish: number[]) {
  console.time("spawner");
  let lifecycle: number[] = [
    fish?.filter((f) => f === 0).length ?? 0,
    fish?.filter((f) => f === 1).length ?? 0,
    fish?.filter((f) => f === 2).length ?? 0,
    fish?.filter((f) => f === 3).length ?? 0,
    fish?.filter((f) => f === 4).length ?? 0,
    fish?.filter((f) => f === 5).length ?? 0,
    fish?.filter((f) => f === 6).length ?? 0,
    fish?.filter((f) => f === 7).length ?? 0,
    fish?.filter((f) => f === 8).length ?? 0,
  ];

  for (let day = 1; day <= days; day++) {
    let spawns = lifecycle?.shift() ?? 0;
    lifecycle[6] += spawns;
    lifecycle.push(spawns);
  }

  console.log(lifecycle.reduce((a, b) => a + b));
  console.timeEnd("spawner");
}
