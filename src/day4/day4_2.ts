import { readFileSync } from "fs";

const part2 = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .map((row) =>
    row.split(",").map((row) => row.split("-").map((value) => parseInt(value)))
  )
  .reduce(
    (count, pair) =>
      pair[0].every((elf1) => pair[1].every((elf2) => elf1 < elf2)) ||
      pair[0].every((elf1) => pair[1].every((elf2) => elf1 > elf2))
        ? count
        : count + 1,
    0
  );
console.log(part2);
