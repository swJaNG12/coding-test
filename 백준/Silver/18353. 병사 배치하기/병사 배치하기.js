let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let arr = input[1].split(' ').map(Number).reverse();
let result = [arr[0]];

function lowerBound(arr, target, start, end) {
    while(start < end) {
        let mid = parseInt((start + end) / 2);
        if(arr[mid] >= target) end = mid;
        else start = mid + 1;
    }
    return end;
}

for(let i = 1; i < arr.length; i++) {
    if(result[result.length-1] < arr[i]) result.push(arr[i]);
    else {
        let idx = lowerBound(result, arr[i], 0, result.length - 1);
        result[idx] = arr[i];
    }
}

console.log(arr.length - result.length);