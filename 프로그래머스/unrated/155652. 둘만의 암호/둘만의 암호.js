function solution (s, skip, index) {
    const skipArr = skip.split('');
    const strArr = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(s => !skipArr.includes(s));
    
    let answer = '';
    
    for(const str of s) {
        let strIdx = strArr.indexOf(str) + index;
        if(strIdx > strArr.length - 1) strIdx %= strArr.length;
        answer += strArr[strIdx];
    }
    return answer;
}