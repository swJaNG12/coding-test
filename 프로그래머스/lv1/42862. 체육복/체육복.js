function solution(n, lost, reserve) {
    let realLost = lost.filter(el => !reserve.includes(el));
    const realReserve = reserve.filter(el => !lost.includes(el));
    
    let answer = n - realLost.length;
    realLost.sort((a,b) => a-b);
    realReserve.sort((a,b) => a-b);
    
    for(let reserveNumber of realReserve) {
        const right = reserveNumber + 1;
        const left = reserveNumber - 1;
        
        if(!!realLost.includes(left)) {
            realLost.splice(realLost.indexOf(left), 1);
            answer++;
        } else if(!!realLost.includes(right)) {
            realLost.splice(realLost.indexOf(right), 1);
            answer++;
        }
    }
    return answer;
}