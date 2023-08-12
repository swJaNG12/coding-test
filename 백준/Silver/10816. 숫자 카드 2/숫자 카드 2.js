let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

function createCountObj(arr) {
    let obj = {};
    for(let v of arr) {
        obj[v] = (obj[v] ?? 0) + 1;
    }
    return obj;
}

const n = parseInt(input[0]);
const m = parseInt(input[2]);
let myCards = input[1].split(' ').map(Number);
let cardNumbers = input[3].split(' ').map(Number);

let mineObj = createCountObj(myCards);
                  
let arr = cardNumbers.map(v => {
  return !!mineObj[v] ? mineObj[v] : 0;
});
        
console.log(arr.join(' '));