import { readFileSync } from "fs";

interface Tree {
  x: number;
  y: number;
  height: number;
}

type Trees = number[][];

const trees = readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .map((row) => row.split("").map((height) => parseInt(height)));

const treeIsVisible = (tree: Tree, trees: Trees): boolean => {
  let visible = true;
  for (let i = tree.x - 1; i >= 0; i--) {
    if (tree.height <= trees[tree.y][i]) visible = false;
  }
  if (visible) return true;
  visible = true;
  for (let i = tree.x + 1; i < trees[0].length; i++) {
    if (tree.height <= trees[tree.y][i]) visible = false;
  }
  if (visible) return true;
  visible = true;
  for (let i = tree.y - 1; i >= 0; i--) {
    if (tree.height <= trees[i][tree.x]) visible = false;
  }
  if (visible) return true;
  visible = true;
  for (let i = tree.y + 1; i < trees.length; i++) {
    if (tree.height <= trees[i][tree.x]) visible = false;
  }
  if (visible) return true;
  return false;
};
let visibleCount = trees.length * 2 + (trees[0].length - 2) * 2;
trees.slice(1, -1).forEach((row, y) =>
  row.slice(1, -1).forEach((height, x) => {
    if (treeIsVisible({ x: x + 1, y: y + 1, height }, trees)) visibleCount++;
  })
);
console.log(visibleCount);
