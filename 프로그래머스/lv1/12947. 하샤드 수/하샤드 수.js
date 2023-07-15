function solution(x) {
    x = x + '';
    let num = x.split('').map(Number).reduce((acc, cur)=>acc+cur);
    
    if(x%num === 0) return true;
    return false;
}