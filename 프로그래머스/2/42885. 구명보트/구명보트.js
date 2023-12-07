function solution(people, limit) {
    const arr = people.slice().sort((a,b) => a - b);
    let count = 0;
    let left = 0;
    let right = people.length - 1;
    
    while(left <= right) {
        if(arr[left] + arr[right] <= limit) {
            left += 1;
        }
        right -= 1;
        count += 1;
    }
    return count;
}