function solution(N, stages) {
    const fails = [];
    for(let i = 1; i <= N; i++) {
        const num1 = stages.filter(v => v === i).length;
        const num2 = stages.filter(v => v >= i).length;
        fails.push([i, num2 / num1]);
    }
    return fails.sort((a,b) => a[1] - b[1]).map(v => v[0]);
}