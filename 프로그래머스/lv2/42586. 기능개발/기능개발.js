function solution(progresses, speeds) {
    let re = [];
    let day = -Infinity;
    
    for(let i = 0; i < progresses.length; i++) {
        const rmDay = Math.ceil((100 - progresses[i]) / speeds[i]);
        
        if(day < rmDay) {
            re.push(1);
            day = rmDay;
        } else {
            re[re.length - 1]++;
        }
    }
    return re;
}