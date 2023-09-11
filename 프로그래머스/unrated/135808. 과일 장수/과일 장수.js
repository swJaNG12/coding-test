function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);   
    
    let count = Math.floor(score.length / m);

    for(let i=1; i<=count; i++) {
    
    answer += score[m*i-1] * m;
        
    }
    return answer;
}