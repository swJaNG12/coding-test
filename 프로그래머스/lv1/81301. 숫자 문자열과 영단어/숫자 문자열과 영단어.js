function solution(s) {
    let numbers =  ['zero','one','two','three','four','five','six','seven','eight','nine'];
    numbers.forEach((el, i) => s = s.replaceAll(el, i.toString()));
    
    return parseInt(s);
}
