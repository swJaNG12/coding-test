function solution(arr) {
    return arr.length !== 1 ? arr.filter(el => el !== Math.min(...arr)) : [-1]
}
