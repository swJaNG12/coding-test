const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim().split("\n");

var [n, m] = input.splice(0, 1)[0].split(' ').map(Number);
var board = input.map(row => row.split(''));
var width = 8;

var pattern1 = Array.from({length: width}, () => []);
var pattern2 = Array.from({length: width}, () => []);

for(let i = 0; i < width; i++) {
    for(let j = 0; j < width; j++) {
        if((i + j) % 2 === 0) {
            pattern1[i][j] = 'W';
            pattern2[i][j] = 'B';
        } else {
            pattern1[i][j] = 'B';
            pattern2[i][j] = 'W';
        }
    }
}

function countRepaint(startRow, startCol, pattern) {
    let count = 0;
    for(let i = 0; i < width; i++) {
        for(let j = 0; j < width; j++) {
            if(pattern[i][j] !== board[startRow + i][startCol + j]) {
                count++;
            }
        }
    }
    return count;
}

let minCount = Infinity;
for(let i = 0; i <= n - width; i++) {
    for(let j = 0; j <= m - width; j++) {
        let count1 = countRepaint(i, j, pattern1);
        let count2 = countRepaint(i, j, pattern2);
        minCount = Math.min(count1, count2, minCount);
    }
}
console.log(minCount)