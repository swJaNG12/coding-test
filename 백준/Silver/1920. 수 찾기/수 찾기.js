const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let set = new Set(input[1].split(' '));
let answer = input[3].split(' ').map(v => set.has(v) ? 1 : 0).join('\n');

console.log(answer);