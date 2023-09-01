function solution(k, score) {
    let arr = [];
    
    return score.reduce((a,c) => {
        arr.push(c);
        arr = arr.sort((a,b) => b-a).slice(0, k);
        a.push(arr.at(-1));
        return a;
    }, [])
}