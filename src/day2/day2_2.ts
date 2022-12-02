import { readFileSync } from "fs";

const part2 = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .map((game) => game.split(" "))
  .map((game) => ({
    opponent: ["A", "B", "C"].indexOf(game[0]) + 1,
    result: game[1] === "X" ? 0 : game[1] === "Y" ? 3 : 6,
  }))
  .map(({ opponent, result }) => ({
    result,
    shape:
      result === 0
        ? opponent === 1
          ? 3
          : opponent - 1
        : result === 6
        ? opponent === 3
          ? 1
          : opponent + 1
        : opponent,
  }))
  .reduce((prev, { shape, result }) => prev + shape + result, 0);
console.log(part2);
