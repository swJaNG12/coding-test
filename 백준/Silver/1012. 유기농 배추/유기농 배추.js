const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let input = fs.readFileSync(filePath).toString().trim().split("\n");

var t = parseInt(input[0]);
var testCases = Array.from({length: t}, () => []);
var tIdx = -1;

for(let i = 1; i < input.length; i++) {
  var str = input[i].split(' ');
  if(str.length === 3) {
    tIdx++;
    testCases[tIdx].push(str.map(Number));
  } else {
    testCases[tIdx].push(str.map(Number));
  }
}

function dfs(mat, x, y, m, n) {
    if (x < 0 || x >= n || y < 0 || y >= m || mat[x][y] === 0) return;
    mat[x][y] = 0;
    dfs(mat, x-1, y, m, n);
    dfs(mat, x+1, y, m, n);
    dfs(mat, x, y-1, m, n);
    dfs(mat, x, y+1, m, n);
}

var result ='';
for(let testCase of testCases) {
  var [m, n, k] = testCase[0];
  var nodes = testCase.slice(1);
  var mat = new Array(n).fill(0).map(() => new Array(m).fill(0));
  var count = 0;
  
  for(let [node1, node2] of nodes) {
      mat[node2][node1] = 1;
  }

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(mat[i][j] === 1) {
        dfs(mat, i, j, m, n);
        count++;
      }
    }
  }
  result += count + '\n';
}

console.log(result)