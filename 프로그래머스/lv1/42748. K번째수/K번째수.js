function solution(arr, commands) {
    let answer = [];
    for(const command of commands) {
        const [i,j,k] = command;
        const num = arr.slice(i - 1, j).sort((a,b) => a-b)[k-1]
        answer.push(num);
    }
    return answer;
}
