let s = parseInt(require('fs').readFileSync('dev/stdin').toString());

let n = 1;
while(n*(n+1) <= 2*s) n++;
s === 1 ? console.log(1) : console.log(n-1);