function solution(t, p) {
    const pLen = p.length;
    const tLen = t.length;
    let cnt = 0;
    
    for(let i = 0; i <= tLen - pLen; i++) {
        const s = parseInt(t.slice(i, i + pLen));
        if(s <= p) cnt++;
    }
    return cnt;
}
