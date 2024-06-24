const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim().split("\n");

var [n, m] = input[0].split(' ').map(Number);
var graph = Array.from({length: n+1}, () => []);

for(let i = 1; i <= n - 1; i++) {
  var [node1, node2, dist] = input[i].split(' ').map(Number);
  graph[node1].push([node2, dist]);
  graph[node2].push([node1, dist]);
}

function dfs(x, dist, visited, distances) {
  visited[x] = true;
  distances[x] = dist;
  graph[x].forEach(([node, distance]) => {
    if(!visited[node]) {
      dfs(node, distance + dist, visited, distances)
    }
  })
}

for(let i = n; i < input.length; i++) {
  var [x, y] = input[i].split(' ').map(Number);
  let visited = Array.from({length: n + 1}).fill(false);
  let distances = Array.from({length: n + 1}).fill(0);
  dfs(x, 0, visited, distances);
  console.log(distances[y]);
}