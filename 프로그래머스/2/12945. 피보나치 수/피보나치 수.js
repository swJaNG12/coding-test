function solution(n) {
    let arr = [0, 1]

    for(let i = 1; i < n; i++) {
        arr.push((arr.at(-1) + arr.at(-2))%1234567)
    }
    return arr.at(-1)
}