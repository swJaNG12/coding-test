const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim();

let [n, ...ropes] = input.split('\n').map(Number);
ropes.sort((a,b) => b-a);

var maxWeight = -Infinity;
for(let i = 0; i < ropes.length; i++) {
    let weight = ropes[i] * (i + 1);
    if(weight > maxWeight) maxWeight = weight;
}
console.log(maxWeight);
