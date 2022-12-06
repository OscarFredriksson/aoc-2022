import { readFileSync } from "fs";
let prevChars: string[] = [];
const part2 =
  readFileSync(__dirname + "/input.txt", "utf-8")
    .split("")
    .findIndex((char, i) => {
      if (prevChars.length === 13) {
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
console.log(part2 + 1);
