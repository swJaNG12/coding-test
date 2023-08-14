let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let [n, k] = input[0].split(' ').map(Number);
let arr = input.slice(1, n + 1).map(Number).sort((a,b) => a-b);
let left = 1;
let right = arr[n-1];
let mid = parseInt((left+right)/2);

while(left <= right) {
  let sum = arr.reduce((a,c) => a += Math.floor(c/mid),0)
  if(sum >= k) left = mid + 1;
  else right = mid - 1;
  mid = parseInt((left+right)/2);
}

console.log(mid)