function solution(array, commands) {
    let result = [];
    for(let [i, j, k] of commands) {
        const sliceArr = array.slice(i - 1, j).sort((a,b) => a-b);
        result.push(sliceArr[k - 1])
    }
    return result
}