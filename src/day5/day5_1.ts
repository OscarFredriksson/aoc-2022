import { readFileSync } from "fs";
const file = readFileSync(__dirname + "/input.txt", "utf-8");
const stackLabels = file.split(" \n\n")[0];
const stackCount = parseInt(stackLabels[stackLabels.length - 1]);
let crates = file
  .split(" 1")[0]
  .split("\n")
  .reduce(
    (crates, row) => {
      const newCrates: string[][] = crates;
      let stack = 0;
      row.split("").forEach((char, i) => {
        if (i % 4 === 1) {
          if (char !== " ") newCrates[stack] = [...newCrates[stack], char];
          stack++;
        }
      });
      return newCrates;
    },
    Array.from({ length: stackCount }, () => [] as string[])
  );
file
  .split("\n\n")[1]
  .split("\n")
  .map((row) => ({
    count: parseInt(row.split("move ")[1].split(" ")[0]),
    from: parseInt(row.split("from ")[1].split(" ")[0]) - 1,
    to: parseInt(row.split("to ")[1].split(" ")[0]) - 1,
  }))
  .forEach(({ count, from, to }) => {
    crates[to] = [...crates[from].slice(0, count).reverse(), ...crates[to]];
    crates[from] = crates[from].slice(count, crates[from].length);
  });
console.log(crates.map((row) => row[0]).join(""));
