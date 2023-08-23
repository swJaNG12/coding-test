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

// 배열의 includes, lastIndexOf를 사용하는 것보다 시간복잡도 측면에서 더 빠르다.
