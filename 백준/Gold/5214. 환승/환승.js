const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim();

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    this.items[this.tail++] = item;
  }
  dequeue() {
    if(this.head === this.tail) return null;
    let item = this.items[this.head];
    delete this.items[this.head]; 
    this.head++;
    return item;
  }
  getLength() {
    return this.tail - this.head;
  }
}

let data = input.split('\n');
const [n, k, m] = data.splice(0,1)[0].split(' ').map(Number);
const edges = data.map(line => line.split(' ').map(Number));
const graph = Array.from({length: n + m + 1}, () => []);

for(let i = 0; i < m; i++) {
  let nodes = edges[i];
  for(let node of nodes) {
    graph[node].push(n + i + 1);
    graph[n + i + 1].push(node);
  }
}

let visited = Array.from({length: n + m + 1}, () => false);
let queue = new Queue();
visited[1] = true;
queue.enqueue({station: 1, distance: 1});
let isReached = false;

while(queue.getLength() > 0) {
  const {station, distance} = queue.dequeue();
  if(station === n) {
    console.log(parseInt(distance / 2) + 1);
    isReached = true;
    break;
  }

  for(let neighbor of graph[station]) {
    if(!visited[neighbor]) {
      visited[neighbor] = true;
      queue.enqueue({station: neighbor, distance: distance + 1});
    }
  }
}

if(!isReached) console.log(-1)