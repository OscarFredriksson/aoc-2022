import { readFileSync } from "fs";

const part2 = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .reduce(
    (groups, curr, i) =>
      i % 3 > 0
        ? [...groups.slice(0, -1), [...groups[groups.length - 1], curr]]
        : [...groups, [curr]],
    [] as string[][]
  )
  .reduce(
    (sum, group) =>
      sum +
      group[0]
        .split("")
        .find(
          (item) =>
            group[1].split("").includes(item) &&
            group[2].split("").includes(item)
        )!
        .split("")
        .map((item) =>
          item === item.toLowerCase()
            ? item.charCodeAt(0) - 96
            : item.charCodeAt(0) - 38
        )[0],
    0
  );
console.log(part2);
