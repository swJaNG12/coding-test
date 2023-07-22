function solution(left, right) {
    let total = 0
    for(let i = left; i <= right; i++) {
        let len = createArrayDivisor(i).length
        len % 2 === 0 ? total += i : total -= i
    }
    return total
}

function createArrayDivisor (n) {
    let arr = []
    for(let i = 1; i <= n; i++) {
        n % i === 0 ?  arr.push(i) : 'continue'
    }
    return arr
}