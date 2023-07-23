function solution(arr, n) {
    return arr.sort((a,b) => {
        if(a[n] < b[n]) return -1
        else if(a[n] > b[n]) return 1
        else return a > b ? 1 : -1
    })
}