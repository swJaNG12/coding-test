function solution(n) {
    n = n +'';
    return Number(n.split('').map(Number).sort((a,b) => b-a).join(''))
}