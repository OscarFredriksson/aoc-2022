import { readFileSync } from "fs";

const part1 = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n\n")
  .map((r) =>
    r
      .split("\n")
      .map((v) => parseInt(v))
      .reduce((prev, curr) => prev + curr, 0)
  )
  .reduce((prev, curr) => (curr > prev ? curr : prev), 0);
console.log("Part 1", part1);
