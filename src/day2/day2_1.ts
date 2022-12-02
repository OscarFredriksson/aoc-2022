import { readFileSync } from "fs";

const part1 = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .map((game) => game.split(" "))
  .map((game) => ({
    opponent: ["A", "B", "C"].indexOf(game[0]) + 1,
    me: ["X", "Y", "Z"].indexOf(game[1]) + 1,
  }))
  .reduce(
    (prev, { opponent, me }) =>
      prev +
      me +
      ([-1, 2].includes(opponent - me)
        ? 6
        : [-1, 2].includes(me - opponent)
        ? 0
        : 3),
    0
  );
console.log(part1);
