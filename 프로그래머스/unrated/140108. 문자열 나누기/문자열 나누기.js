function solution(ss) {
    let result = 0;
    let arr = [];

    ss.split('').forEach(s => {
        arr.push(s);

        const xCnt = arr.filter(v => v === arr[0]).length;
        const notXCnt = arr.filter(v => v !== arr[0]).length;

        if(xCnt === notXCnt) {
            result++;
            arr = [];
        }
    })
    if(arr.length) result++;
    return result
}