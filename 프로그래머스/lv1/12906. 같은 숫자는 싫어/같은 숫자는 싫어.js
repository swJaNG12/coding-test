function solution(arr) {
    return arr.reduce((acc, cur) => {
        if(acc[acc.length-1] !== cur) acc.push(cur)
        return acc
    }, [arr.shift()])
}