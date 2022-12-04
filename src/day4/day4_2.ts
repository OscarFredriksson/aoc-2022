import { readFileSync } from "fs";

const part2 = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .map((row) =>
    row
      .split(",")
      .flatMap((row) => row.split("-"))
      .map((value) => parseInt(value))
  )
  .reduce(
    (count, pair) =>
      (pair[0] < pair[2] &&
        pair[1] < pair[2] &&
        pair[0] < pair[3] &&
        pair[1] < pair[3]) ||
      (pair[0] > pair[2] &&
        pair[1] > pair[2] &&
        pair[0] > pair[3] &&
        pair[1] > pair[3])
        ? count
        : count + 1,
    0
  );
console.log(part2);
