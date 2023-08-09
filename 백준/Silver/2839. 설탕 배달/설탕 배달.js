let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let n = Number(input[0]);

let cnt = 0;
while(true) {
    if(n === 0 || n%5 === 0) {
        cnt += parseInt(n/5);
        console.log(cnt);
        break;
    }
    n -= 3;
    cnt++;
    if(n < 0) {
        console.log(-1);
        break;
    }
}