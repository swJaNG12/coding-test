function solution(s) {
    const len = s.length/2
    const mid = Math.floor(len)
    return Number.isInteger(len) ? s[mid-1]+s[mid] : s[mid]
}
