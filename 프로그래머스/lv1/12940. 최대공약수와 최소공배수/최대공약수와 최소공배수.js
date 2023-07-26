function solution(n, m) {
    const max = Math.max(n, m)
    const arrN = []
    for(let i = 1; i <= max; i++) {
        if(n % i === 0 && m % i === 0) arrN.push(i)
    }
    
    const GCD = Math.max(...arrN)
    const LCM = n * m / GCD
    return [GCD, LCM]
}