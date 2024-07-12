const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.splice(0,1)[0].split(' ').map(Number);
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]] // up right bottom left
let graph = input.map(line => line.split(' ').map(Number));
let second = 0;

while(++second) {
  let visited = new Array(N).fill().map(() => new Array(M).fill(false));
  let count = new Array(N).fill().map(() => new Array(M).fill(0));
  let queue = [{x: 0, y: 0}];

  while(queue.length > 0) {
    const {x, y} = queue.shift();

    for(let [dx, dy] of directions) {
      let newX = x + dx, newY = y + dy;
      if(newX  >= 0 && newX < N && newY >= 0 && newY < M  && !visited[newX][newY]) {
        if(graph[newX][newY] === 1) {
          count[newX][newY]++;
        } else {
          visited[newX][newY] = true;
          queue.push({x: newX, y: newY});
        }
      }
    }
  }

  let isEnd = true;
  for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
      if(count[i][j] >= 2) graph[i][j] = 0;
      if(graph[i][j] !== 0) isEnd = false;
    }
  }

  if(isEnd) break;
} 

console.log(second)