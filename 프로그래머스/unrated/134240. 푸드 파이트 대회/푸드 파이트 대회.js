function solution(food) {
    let re = ''
    for(let i = 1; i < food.length; i++) {
        let cnt = Math.floor(food[i]/2) 
        for(let j = 1; j <= cnt; j++) {
            re += i
        }
    }
    
    return re + 0 + re.split('').reverse().join('')
}