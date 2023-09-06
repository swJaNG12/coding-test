function solution(answer) {
    const result = []
    
    const p1 = [1,2,3,4,5];
    const p2 = [2,1,2,3,2,4,2,5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const s1 = answer.filter((el,i) => el === p1[i % p1.length]).length;
    const s2 = answer.filter((el,i) => el === p2[i % p2.length]).length;
    const s3 = answer.filter((el,i) => el === p3[i % p3.length]).length;
    console.log(s1, s2, s3);
    
    const arr = [s1,s2,s3];
    const max = Math.max(...arr);
    arr.forEach((s,i) => {
        if(s === max) result.push(i+1);
    })
    
    return result.sort((a,b)=>a-b);
}