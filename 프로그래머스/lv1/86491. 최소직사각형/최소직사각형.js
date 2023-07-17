function solution(sizes) {
    sizes= sizes.map(([w,h]) => w < h ? [h,w] : [w,h])
    
    let w = -Infinity
    let h = -Infinity
    
    for(let size of sizes) {
        if(size[0] > w) w = size[0]
        if(size[1] > h) h = size[1]
    }
    return w * h
}
