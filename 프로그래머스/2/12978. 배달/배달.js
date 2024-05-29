function solution(N, road, K) {
    const graph = Array.from(Array(N + 1), () => []);
    road.forEach(([a,b,c]) => {
        graph[a].push([b,c]);
        graph[b].push([a,c]);
    })
    
    const distances = new Array(N + 1).fill(Infinity);
    const visited = new Array(N + 1).fill(false);
    
    distances[1] = 0;
    const pq = [[0,1]];
    
    while(pq.length > 0) {
        pq.sort((a,b) => a[0] - b[0]);
        const [currentDistance, currentNode] = pq.shift();
        
        if(visited[currentNode]) continue;
        visited[currentNode] = true;
        
        graph[currentNode].forEach(([nextNode, travelTime]) => {
            const newDistance = currentDistance + travelTime;
            if(newDistance < distances[nextNode]) {
                distances[nextNode] = newDistance;
                pq.push([newDistance, nextNode]);
            }
        })
    }
    return distances.filter(d => d <= K).length;
}