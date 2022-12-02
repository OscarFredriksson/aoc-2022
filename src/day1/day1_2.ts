import { readFileSync } from "fs";

const part2 = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n\n")
  .map((r) =>
    r
      .split("\n")
      .map((v) => parseInt(v))
      .reduce((prev, curr) => prev + curr, 0)
  )
  .reduce(
    (prev, curr) =>
      curr > prev[0]
        ? [curr, ...prev.slice(0, 2)]
        : curr > prev[1]
        ? [prev[0], curr, prev[1]]
        : curr > prev[2]
        ? [...prev.slice(0, 2), curr]
        : prev,
    [0, 0, 0]
  )
  .reduce((prev, curr) => prev + curr, 0);
console.log("Part 2", part2);
