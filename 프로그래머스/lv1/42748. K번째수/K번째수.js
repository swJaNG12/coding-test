function solution(arr, commands) {
    let answer = []
    for(let idx = 0; idx < commands.length; idx++) {
        let [i,j,k] = commands[idx]
        let result = arr.slice(i-1, j).sort((a,b) => a-b)[k-1]
        answer.push(result)
    }
    return answer    
}