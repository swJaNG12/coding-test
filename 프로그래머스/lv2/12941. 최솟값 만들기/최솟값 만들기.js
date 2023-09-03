function solution(a,b) {
    b.sort((a,b) => b-a);
    return a.sort((a,b) => a-b).reduce((a,c,i) => a += c * b[i],0);
}