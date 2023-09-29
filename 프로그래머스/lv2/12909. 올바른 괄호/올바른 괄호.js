function solution(s) {
    let cnt = 0;
    let answer = true;

    for(let i = 0; i < s.length; i++) {
        cnt += s[i] === '(' ? 1 : -1;
        if(cnt < 0) answer = false;
        // if(s[i] === '(') cnt++;
        // else if(s[i] === ')' && cnt > 0) cnt--;
        // else {
        //     answer = false;
        // }
    }

    return answer ? !cnt  : false
}