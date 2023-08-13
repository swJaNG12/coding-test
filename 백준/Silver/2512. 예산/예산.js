let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let arr = input[1].split(' ').map(Number);
let budget = parseInt(input[2]);

let left = 1;
let right = Math.max(...arr);
let mid = parseInt((left + right) / 2);

while(left <= right) {
    let sum = arr.reduce((a,c) => a += Math.min(mid, c), 0);
    if(sum <= budget) left = mid+1;
    else right = mid-1;
    
    mid = parseInt((left+right) / 2);
}
console.log(mid);