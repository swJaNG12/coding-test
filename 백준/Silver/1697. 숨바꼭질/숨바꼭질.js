const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let data = fs.readFileSync(filePath).toString().trim();

let [n, k] = data.split(' ').map(Number);

let visited = Array.from({length: 100001}, () => false);
let queue = [{node: n, depth: 0}];
visited[n] = true;

while(queue.length > 0) {
    const {node, depth} = queue.shift();
    if(node === k) {
        console.log(depth);
        break;
    }
    const nodes = [
        {node: node - 1, depth: depth + 1},
        {node: node + 1, depth: depth + 1},
        {node: node * 2, depth: depth + 1},
    ]
    
    nodes.forEach(next => {
        if(next.node >= 0 && next.node <= 100000 && !visited[next.node]) {
            queue.push({node: next.node, depth: next.depth})
            visited[next.node] = true;
        }
    })
}