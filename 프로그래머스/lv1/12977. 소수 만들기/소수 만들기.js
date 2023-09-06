function solution(nums) {
  let cnt = 0;
  for(let i = 0; i < nums.length-2; i++) {
    for(let j = i+1; j < nums.length-1; j++) {
      for(let k =j+1; k < nums.length; k++) {
        const num = nums[i] + nums[j] + nums[k];
        const sqrt = Math.sqrt(num);
        let flag = true;
        for(let l = 2; l <= sqrt; l++) {
           if(num % l === 0) {
             flag = false;
           }
        }
        if(flag) cnt++;
      }
    }
  }
  return cnt;
}