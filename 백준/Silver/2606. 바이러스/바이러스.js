const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim().split("\n");

var n = parseInt(input[0]);
var k = parseInt(input[1]);
var info = input.slice(2).map(s => s.split(' ').map(Number));
var graph = Array.from({ length: n + 1 }, () => []);

for(let [node1, node2] of info) {
    graph[node1].push(node2);
    graph[node2].push(node1);
}

var visited = new Array(n + 1).fill(false);
var count = 0;

function dfs(graph, node, visited) {
    visited[node] = true;
    count++;
    
    graph[node].forEach((neighbor) => {
        if(!visited[neighbor]) {
            dfs(graph, neighbor, visited);
        }
    })
}
dfs(graph, 1, visited);
console.log(count - 1);