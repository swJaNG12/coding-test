function solution(arr)
{
    let p1 = 0, p2 = 1;
    let answer = [];
    while(p2 <= arr.length) {
        if(arr[p1] !== arr[p2]) {
            answer.push(arr[p1]);
            p1 = p2;
          
        }
        p2++;
    }
    return answer;
}