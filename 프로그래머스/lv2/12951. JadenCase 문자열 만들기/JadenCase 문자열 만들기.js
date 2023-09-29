function solution(s) {
    return s.split(' ').map(s => {
        if(!s) return;
        s = s.toLowerCase();
        return !parseInt(s[0]) ? s[0].toUpperCase() + s.slice(1) : s
    }).join(' ')
}