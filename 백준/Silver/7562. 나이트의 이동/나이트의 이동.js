const fs = require("fs"); 
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"; 
let data = fs.readFileSync(filePath).toString().trim();

const input = data.split('\n');
const testCases = [];
const directions = [[1,-2],[2,-1],[2,1],[1,2], [-1,2],[-2,1],[-2,-1],[-1,-2]];

for(let i = 1; i < input.length; i += 3) {
    const width = parseInt(input[i]);
    const current = input[i + 1].split(' ').map(Number);
    const target = input[i + 2].split(' ').map(Number);
    testCases.push([width, current, target]);
}

for(let testCase of testCases) {
    const [width, current, target] = testCase;
    const [targetX, targetY] = target;
    let visited = Array.from({length: width}, () => new Array(width).fill(-1));
    let queue = [current];
    visited[current[0]][current[1]] = 0;
    
    while(queue.length > 0) {
        const [curX, curY] = queue.shift();
        if(curX === targetX && curY === targetY) {
            console.log(visited[curX][curY]);
            break;
        }
        
        for(let [dx,dy] of directions) {
            const newX = curX + dx, newY = curY + dy;
            if(newX >= 0 && newX < width && newY >= 0 && newY < width && visited[newX][newY] === -1) {
                visited[newX][newY] = visited[curX][curY] + 1;
                queue.push([newX, newY]);
            }
        }
    }
}