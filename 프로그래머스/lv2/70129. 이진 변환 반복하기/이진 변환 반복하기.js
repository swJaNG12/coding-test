function solution(s) {
    let cnt = 0;
    let zeroCnt = 0;
    
    while(s !== '1') {
        zeroCnt += s.replaceAll('1','').length;
        s = s.replaceAll('0', '').length.toString(2);
        cnt++;
    }

    return [cnt, zeroCnt];
}