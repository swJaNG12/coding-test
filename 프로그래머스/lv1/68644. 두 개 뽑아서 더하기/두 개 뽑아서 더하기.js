function solution(numbers) {
    let re = []
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            re.push(numbers[i] + numbers[j])
        }
    }
    const set = new Set(re)
    return [...set].sort((a,b) => a - b)
}