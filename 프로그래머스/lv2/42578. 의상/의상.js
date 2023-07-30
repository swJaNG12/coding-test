function solution(clothes) {
    let hash = {}
    for(let i = 0; i < clothes.length; i++) {
        const category = clothes[i][clothes[i].length - 1];
        hash[category] = (hash[category] ?? 0) + 1;
    }

    let answer = Object.values(hash).reduce((acc, cur) => acc *= (cur+1) ,1)
    return answer -1
}