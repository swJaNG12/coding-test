function solution(s) {
    let sArr = s.toLowerCase().split('');
    
    const pCount = sArr.filter(s => s === 'p').length
    const yCount = sArr.filter(s => s === 'y').length
    return pCount === yCount
}