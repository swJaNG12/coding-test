const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const pos = input[1].split(' ').map(Number).sort((a,b) => a-b);
const resultIndex = Math.floor((n - 1) / 2);

console.log(pos[resultIndex]);