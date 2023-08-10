let input = require("fs").readFileSync('dev/stdin').toString().split('\n').map(Number);

let fiboArr = [0,1];
while(fiboArr[fiboArr.length-1] < 1e9) {
   fiboArr.push(fiboArr[fiboArr.length-2] + fiboArr[fiboArr.length-1]);
}

let n = input[0];
for(let i = 1; i <= n; i++) {
    let num = input[i];
    let idx = fiboArr.length - 1;
    let arr = [];
    while(num > 0) {
        if(fiboArr[--idx] <= num) {
            num -= fiboArr[idx];
            arr.push(fiboArr[idx]);
        }
    }
    let answer = '';
    arr.reverse().forEach(el => answer += ` ${el}`);
    console.log(answer.trim());
}
