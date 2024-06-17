function solution(N, stages) {
    let arr = [];
    let currentStage = 1;
    
    while(currentStage <= N) {
        let failureRate;
        const stageReachedPlayers = stages.filter(stage => stage >= currentStage);
        if(stageReachedPlayers.length !== 0) {
            const unclearedPlayers = stageReachedPlayers.filter(stage => stage === currentStage)
            failureRate = unclearedPlayers.length / stageReachedPlayers.length;
        } else {
            failureRate = 0;
        }
        arr[currentStage - 1] = failureRate
        currentStage++;
    }
    let result = arr.map((v, i) => ({v, i: i + 1})).sort((a,b) => b.v - a.v).map(obj => obj.i);
    return result;
}