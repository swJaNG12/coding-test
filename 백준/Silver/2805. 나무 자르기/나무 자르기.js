let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let [n, h] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number).sort((a,b) => a-b);

let left = 1;
let right = Math.max(...arr);
let mid = parseInt((left+right) / 2);

while(left <= right) {
    let sum = arr.reduce((a,c) => {
        c > mid ? a += c - mid : null;
        return a;
    }, 0);
    
    if(sum >= h) left = mid + 1;
    else right = mid - 1;
    mid = parseInt((left+right) / 2);
}
console.log(mid);