const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim();

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    if(this.headIndex === this.tailIndex) return null;
    
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let [s, t] = input.split(' ').map(Number);
let visited = new Set().add(s);
// let queue = [{n: s, operation: ''}];
let queue = new Queue();
queue.enqueue({n: s, operation: ''})

if(s === t) {
    console.log('0');
    return;
}
let isFind = false;

while(queue.getLength() > 0) {
    const {n, operation} = queue.dequeue();
    if(n > 10e9) continue;
    if(n === t) {
        console.log(operation);
        isFind = true;
        break;
    } 
    
    for(let oper of ['*', '+', '-', '/']) {
        let next = n;
        if(oper === '*') next = n * n;
        if(oper === '+') next = n + n;
        if(oper === '-') next = n - n;
        if(oper === '/' && n !== 0) next = n / n;
        
        if(!visited.has(next)) {
            visited.add(next);
            queue.enqueue({n: next, operation: operation + oper});
        }
    }
}
if(!isFind) console.log('-1')