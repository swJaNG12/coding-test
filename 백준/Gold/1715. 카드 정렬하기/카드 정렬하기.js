const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);

class MinHeap {
    constructor() {
        this.items = [];
    }
    bubbleUp() {
        let currIdx = this.items.length - 1;
        let parentIdx = Math.floor((currIdx - 1) / 2);
        
        while(currIdx > 0 && (this.items[currIdx] < this.items[parentIdx])) {
            [this.items[currIdx], this.items[parentIdx]] = [this.items[parentIdx], this.items[currIdx]];
            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
        }
    }
    insert(val) {
        this.items.push(val);
        this.bubbleUp();
    }
    sinkDown(currIdx) {
        let childOneIdx = currIdx * 2 + 1;
        
        while(childOneIdx < this.items.length) {
            let childTwoIdx = childOneIdx + 1 < this.items.length ? childOneIdx + 1 : -1;
            let swapIdx = childTwoIdx !== -1 && this.items[childTwoIdx] < this.items[childOneIdx] ? childTwoIdx : childOneIdx; 
            
            if(this.items[swapIdx] < this.items[currIdx]) {
                [this.items[swapIdx], this.items[currIdx]] = [this.items[currIdx], this.items[swapIdx]];
                currIdx = swapIdx;
                childOneIdx = currIdx * 2 + 1;
            } else {
                return;
            }
        }
    }
    
    extractMin() {
         if (this.items.length === 0) {
            return undefined;
        }
        let top = this.items[0];
        let last = this.items.pop();
        if (this.items.length > 0) {
            this.items[0] = last;
            this.sinkDown(0);
        }
        return top;
    }
    
    size() {
        return this.items.length;
    }
}

let minHeap = new MinHeap();
for(let i = 1; i <= n; i++) {
    minHeap.insert(parseInt(input[i]));
}

let result = 0;
while(minHeap.size() > 1) {
    let first = minHeap.extractMin();
    let second = minHeap.extractMin();
    result += first + second;
    minHeap.insert(first + second);
}

console.log(result)