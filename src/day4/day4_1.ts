import { readFileSync } from "fs";

const part1 = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .map((row) =>
    row.split(",").map((row) => row.split("-").map((value) => parseInt(value)))
  )
  .reduce(
    (count, pair) =>
      (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) ||
      (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1])
        ? count + 1
        : count,
    0
  );
console.log(part1); //528
