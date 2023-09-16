function solution(babbling) {
    const arr = babbling.map(v => {
        return v.replaceAll('aya', 'A')
                .replaceAll('ye', 'Y')
                .replaceAll('woo', 'W')
                .replaceAll('ma', 'M')
    })
    
    return arr.filter(s => {
        if(s.toUpperCase() !== s) return false;
        
        let flag = true;
        let idx = 0;
        for(let i = 1; i < s.length; i++) {
            if(s[idx] === s[i]) {
                flag = false;
                break;
            }
            idx++;
        }
        
        return flag;
    }).length;
}