import { readFileSync } from "fs";

interface Tree {
  x: number;
  y: number;
  height: number;
}

const trees = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .map((row) => row.split("").map((height) => parseInt(height)));

const calcScore = (tree: Tree, trees: number[][]): number => {
  let leftDist = 1;
  for (let i = tree.x - 1; i > 0; i--) {
    if (tree.height > trees[tree.y][i]) {
      leftDist++;
    } else break;
  }
  let rightDist = 1;
  for (let i = tree.x + 1; i < trees[0].length - 1; i++) {
    if (tree.height > trees[tree.y][i]) {
      rightDist++;
    } else break;
  }
  let upDist = 1;
  for (let i = tree.y - 1; i > 0; i--) {
    if (tree.height > trees[i][tree.x]) {
      upDist++;
    } else break;
  }
  let downDist = 1;
  for (let i = tree.y + 1; i < trees.length - 1; i++) {
    if (tree.height > trees[i][tree.x]) downDist++;
    else break;
  }
  return leftDist * rightDist * upDist * downDist;
};
let highestScore = 1;
trees.slice(1, -1).forEach((row, y) =>
  row.slice(1, -1).forEach((height, x) => {
    const score = calcScore({ x: x + 1, y: y + 1, height }, trees);
    if (score > highestScore) highestScore = score;
  })
);
console.log(highestScore);
