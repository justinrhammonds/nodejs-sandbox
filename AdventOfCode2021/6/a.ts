import { testInput, myInput } from "./data";

a(256, myInput);

function a(days: number, fish: number[]) {
  console.time("spawner A");
  for (let day = 1; day <= days; day++) {
    fish = simulateDay(fish);
  }

  console.log(fish.length);
  console.timeEnd("spawner A");
}

function simulateDay(fish: number[]) {
  fish = fish.map((f) => f - 1);
  const newFish = fish.filter((i) => i < 0).map((i) => 8);
  // add newFish set with timer of 8, update existing fish whose timer is 0 to 6
  fish = fish.concat(newFish).map((f) => (f < 0 ? 6 : f));

  return fish;
}
