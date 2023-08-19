const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let left = Math.max(...arr);
let right = arr.reduce((a,c) => a+c);

while(left <= right) {
    let mid = parseInt((left + right) / 2);
    let cnt = 1;
    let sum = 0;
    for(const len of arr) {
        if(sum + len > mid) {
            cnt++;
            sum = 0;
        }
        sum += len;
    }
    
    if(cnt <= m) right = mid - 1;
    else left = mid + 1;
}
console.log(left);
       