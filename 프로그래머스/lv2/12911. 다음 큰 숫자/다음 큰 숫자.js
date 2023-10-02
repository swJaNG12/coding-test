function solution(n) {
    const oneCnt = n.toString(2).replaceAll('0','').length;
    while(n++) if(n.toString(2).replaceAll('0','').length === oneCnt) break
    return n;
}