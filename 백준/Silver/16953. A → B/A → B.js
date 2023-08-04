let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let [a,b] = input[0].split(' ').map(el => parseInt(el));
let cnt = 0;

while(b > a) {
  if(b % 2 === 0) {
    b /= 2;
  } else if(b % 10 === 1) {
    b = Math.floor(b/10);
  } else {
      break;
  }
  cnt++;
}

a === b ? console.log(cnt+1) : console.log(-1);
