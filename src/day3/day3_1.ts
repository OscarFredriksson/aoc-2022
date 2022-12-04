import { readFileSync } from "fs";

const part1 = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .reduce(
    (sum, rucksack) =>
      sum +
      rucksack
        .split("")
        .find((item, i, items) => items.slice(items.length / 2).includes(item))!
        .split("")
        .map((item) =>
          item === item.toLowerCase()
            ? item.charCodeAt(0) - 96
            : item.charCodeAt(0) - 38
        )[0],
    0
  );
console.log(part1);
