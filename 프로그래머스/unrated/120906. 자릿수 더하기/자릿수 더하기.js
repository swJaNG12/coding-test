function solution(n) {
    return n.toString().split('').map(Number).reduce((a,c) => a+c, 0)
}