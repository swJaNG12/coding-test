function solution(n,m,section) {
    let pos = 0;
    let cnt = 0;

    section.forEach(num => {
        if(pos < num) {
            pos = num + m - 1;
            cnt++;
        }
    })
    return cnt;
}