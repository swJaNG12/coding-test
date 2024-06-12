const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const gradeArr = [];

for(let i = 1; i <= n; i++) {
  const grade = input[i].split(' ').map((v, i) => i === 0 ? v : parseInt(v));
  gradeArr.push(grade);  
}

gradeArr.sort((a,b) => {
    if(a[1] !== b[1]) return b[1] - a[1];
    if(a[2] !== b[2]) return a[2] - b[2];
    if(a[3] !== b[3]) return b[3] - a[3];
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
})

let result = gradeArr.map(student => student[0]).join('\n');
console.log(result);