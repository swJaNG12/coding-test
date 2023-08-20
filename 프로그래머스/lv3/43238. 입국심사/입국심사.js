function solution(n, times) {
    let left = 1;
    let right = Number.MAX_SAFE_INTEGER - 1;
    while(left <= right) {
        let mid = parseInt((left+right)/2);
        const cnt = times.reduce((a, c) => {
            return a += parseInt(mid / c);
        }, 0);

        if(cnt < n) left = mid + 1;
        else right = mid - 1;
    }
    return left;
}
