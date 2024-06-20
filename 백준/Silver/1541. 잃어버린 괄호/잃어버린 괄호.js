const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim();

var data = input.split('-');
var total = data[0].split('+').map(Number).reduce((a,c) => a+c, 0);

for(let i = 1; i < data.length; i++) {
    const numbers = data[i].split('+').map(Number);
    const sum = numbers.reduce((a,c) => a+c, 0);
    total -= sum;
}

console.log(total);