function solution(a,b) {
    if(a === b) return a
    let re = 0
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++) re += i
    
    return re
}
