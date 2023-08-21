function solution(sss) {
    return sss.split(' ').map(ss => {
        return ss.split('').map((s, i) => {
            return i % 2 === 0 ? (s = s.toUpperCase()) : (s = s.toLowerCase());
        }).join('');
    }).join(' ');
}