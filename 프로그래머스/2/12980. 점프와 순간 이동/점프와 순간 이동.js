function solution(n) {
    let target = n;
    let cnt = 0;
    
    while(target > 0) {
        const isEven = target % 2 === 0;
        
        if(isEven) {
            target /= 2;
        } else {
            target -= 1;
            cnt += 1;
        }
    }
    
    return cnt;
}
