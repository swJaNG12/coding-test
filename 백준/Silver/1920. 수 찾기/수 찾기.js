const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const arrN = input[1].split(' ').map(Number).sort((a,b) => a-b);
const arrM = input[3].split(' ').map(Number);
let answer = [];

for(let i = 0; i < arrM.length; i++) {
    let t = arrM[i];
    let left = 0;
    let right = arrN.length-1;
    
    while(left <= right) {
        let mid = parseInt((left+right) / 2);
        
        if(arrN[mid] > t) right = mid - 1;
        else if(arrN[mid] < t) left = mid + 1;
        else if(arrN[mid] === t) {
            answer.push(1);
            break;
        }
        
        if(left > right) answer.push(0)
    }
}

console.log(answer.join('\n'));