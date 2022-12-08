import { readFileSync } from "fs";
let sizes = { "/": 0 } as any;
let currDir = "/";
readFileSync(__dirname + "/input.txt", "utf-8")
  .split("$")
  .slice(2)
  .forEach((command) => {
    if (command.startsWith(" cd")) {
      const dir = command.split(" cd ")[1].trim();
      if (dir === "..")
        currDir = currDir.slice(0, currDir.lastIndexOf("/") - 1);
      else currDir += dir + "/";
    } else if (command.startsWith(" ls")) {
      const files = command
        .trim()
        .split("\n")
        .slice(1)
        .reduce(
          (prev, line) =>
            line.startsWith("dir")
              ? prev
              : [...prev, parseInt(line.split(" ")[0])],
          [] as number[]
        );
      sizes = {
        ...sizes,
        [currDir]: files.reduce((sum, size) => sum + size, 0),
      };
    }
  });

Object.keys(sizes).forEach((key) => {
  const size = Object.keys(sizes).reduce(
    (size, nestedKey) =>
      nestedKey.startsWith(key) ? size + sizes[nestedKey] : size,
    0
  );
  sizes[key] = size;
});

const neededSpace = 30000000 - (70000000 - sizes["/"]);
const deleteDir = Object.keys(sizes).reduce(
  (deleteDir, key) =>
    sizes[key] >= neededSpace && sizes[key] < sizes[deleteDir]
      ? key
      : deleteDir,
  "/"
);

console.log(sizes[deleteDir]);
