function solution(n, words) {
    const arr = [];
    let number = 0;
    let order = 0;
    for(let i = 1; i < words.length; i++) {
        arr.push(words[i-1]);
        const len = words[i-1].length;
        const lastWord = words[i-1][len-1];
        const firstWord = words[i][0];
        
        if(arr.includes(words[i]) || (lastWord !== firstWord)) {
            number = (i % n) + 1;
            order = parseInt(i / n) + 1;
            break;
        }
    }

    return [number, order];
}
