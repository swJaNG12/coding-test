const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input.splice(0, 2).map(Number);
let edges = input.map((line) => line.split(' ').map(Number));
let graph = new Array(n + 1).fill().map(() => []);
for(let [node1, node2] of edges) {
  graph[node1].push(node2);
  graph[node2].push(node1);
}

let visited = new Array(n + 1).fill(-1);
let queue = [1];
visited[1] = 0;
let result = 0;

while(queue.length > 0) {
  const num = queue.shift();

  for(let neighbor of graph[num]) {
    if(visited[neighbor] === -1) {
      visited[neighbor] = visited[num] + 1
      queue.push(neighbor);
    }
  }
}

for(let i = 1; i <= n; i++) {
  if(visited[i] > 0 && visited[i] <= 2) {
    result++;
  }
}

console.log(result)