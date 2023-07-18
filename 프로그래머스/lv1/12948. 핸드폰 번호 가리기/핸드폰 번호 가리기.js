function solution(pn) {
    let n = pn.length - 4
    return pn.slice(0, n).replace(/[0-9]/g, '*') + pn.slice(n)
}
