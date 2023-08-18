function solution(t, p) {
    let len = p.length;
    let cnt = 0;
    for(let i = 0; i < t.length-len+1; i++) {
        let s = parseInt(t.slice(i,i+len));
        s <= parseInt(p) ? cnt++ : null;
    }
    return cnt;
}
