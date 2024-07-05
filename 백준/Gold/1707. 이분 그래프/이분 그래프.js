const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let k = parseInt(input.splice(0,1)[0]);

const result = [];

while(k--) {
    const [v,e] = input.splice(0,1)[0].split(' ').map(Number);
    const edges = input.splice(0,e).map(line => line.split(' ').map(Number));
    let graph = new Array(v + 1).fill(0).map(() => []);
    for(let [node1, node2] of edges) {
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    
    let isBipartite = true;
    let color = new Array(v + 1).fill(null);
    const bfs = (start) => {
        let queue = [start];
        color[start] = 'blue';
        
        while(queue.length > 0) {
            const node = queue.shift();
            
            for(let neighbor of graph[node]) {
                if(color[neighbor] === null) {
                    color[neighbor] = color[node] === 'red' ? 'blue' : 'red';
                    queue.push(neighbor);
                } else if(color[neighbor] === color[node]) {
                    isBipartite = false;
                    return;
                }
            }
        }
    }
    for(let i = 1; i <= v; i++) {
        if(color[i] === null) {
            bfs(i);
        }
        if(!isBipartite) break;
    }
    
    result.push(isBipartite ? 'YES' : 'NO');
}
console.log(result.join('\n'))