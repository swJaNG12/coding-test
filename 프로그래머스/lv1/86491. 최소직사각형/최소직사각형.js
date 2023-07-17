function solution(sizes) {
    sizes = sizes.map(([w, h]) => w < h ? [h, w] : [w, h])
    
    let max = [-Infinity, -Infinity]
    for(let size of sizes) {
        if(size[0] > max[0]) max[0] = size[0]
        if(size[1] > max[1]) max[1] = size[1]
    }
    
    return max[0] * max[1]
}