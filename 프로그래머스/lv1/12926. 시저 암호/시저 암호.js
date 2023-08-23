function solution(s, n) {
    let result = '';
    s.split('').forEach(v => {
        if(/[a-z]/gi.test(v)) {
            const startCode = v.toUpperCase() === v ? 'A'.charCodeAt() : 'a'.charCodeAt();
            const newCode = (v.charCodeAt() - startCode + n) % 26 + startCode;
            result += String.fromCharCode(newCode);
        } else {
            result += v;
        }
    })
    return result;
}