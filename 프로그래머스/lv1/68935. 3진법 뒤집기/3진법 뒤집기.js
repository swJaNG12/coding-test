function solution(n) {
    let arr = []
    let num = 3
    
    while(n !== 0) {
        arr.push(n % num)
        n = Math.floor(n / 3)
    }
    arr.reverse()
    
    return arr.reduce((acc, cur, idx) => {
        return Math.pow(num, idx) * cur + acc
    }, 0)
}