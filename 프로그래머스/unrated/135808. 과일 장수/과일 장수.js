function solution(k,m,score) {
    score = score.sort((a,b) => a-b);
    let sum = 0;

    while(score.length >= m) {
        const box = score.splice(score.length-m);
        sum += Math.min(...box) * m;
    }
    return sum;
}