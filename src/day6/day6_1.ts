import { readFileSync } from "fs";
let prevChars: string[] = [];
const part1 =
  readFileSync(__dirname + "/input.txt", "utf-8")
    .split("")
    .findIndex((char, i) => {
      if (prevChars.length === 3) {
        if (
          !prevChars.includes(char) &&
          new Set(prevChars).size === prevChars.length
        ) {
          return true;
        }
        prevChars = prevChars.slice(1);
      }
      prevChars.push(char);
      return false;
    }) + 1;
console.log(part1);
