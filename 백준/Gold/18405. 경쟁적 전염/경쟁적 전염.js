const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.splice(0, 1)[0].split(' ').map(Number);
let [s, targetX, targetY] = input.pop().split(' ').map(Number);

const matrix = input.map(line => line.split(' ').map(Number));
const directions = [[-1,0], [0,1], [1,0], [0, -1]];

function getInitialVirusPositions(matrix, n) {
  let virusPostions = [];
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      const currValue = matrix[x][y];
      if (currValue !== 0) virusPostions.push([currValue, x, y]);
    }
  }
  return virusPostions.sort((a,b) => a[0] - b[0]);
}

let virusQueue = getInitialVirusPositions(matrix, n);

while (s--) {
  let newQueue = [];
  while(virusQueue.length > 0) {
    const [virus, currX, currY] = virusQueue.shift();
    for(let [dx, dy] of directions) {
      let newX = currX + dx, newY = currY + dy;
      if(newX >= 0 && newX < n && newY >= 0 && newY < n && matrix[newX][newY] === 0) {
        matrix[newX][newY] = virus;
        newQueue.push([virus, newX, newY])
      }
    }
  }
  virusQueue = newQueue;
}

const result = matrix[targetX - 1][targetY - 1];
console.log(result)
