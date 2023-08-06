let fs = require('fs');
let [n, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');


let arr = input[0].split(' ').map(Number);
let arrows = Array.from({length:1000000},()=>0);
let answer = 0;

for(let h of arr) {
    if(arrows[h]) {
      arrows[h]--;
      arrows[h-1]++;
    } else {
      answer++;
      arrows[h-1]++;
    }
}
console.log(answer);