function solution(s) {
    const result = [];
    const map = new Map();
    s.split('').forEach((v, i) => {
        if(map.has(v)) result.push(i - map.get(v));
        else result.push(-1);
        map.set(v, i);
    })
    return result;
}