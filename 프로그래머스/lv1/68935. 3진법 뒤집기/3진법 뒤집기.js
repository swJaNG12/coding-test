function solution(n) {
    const arr = []
    const num = 3
    
    while(n !== 0) {
        arr.push(n % num)
        n = Math.floor(n / num)
    }
    arr.reverse()
    
    return arr.reduce((acc, cur, idx) => {
        return Math.pow(num, idx) * cur + acc
    }, 0)
}