function solution(n) {
  let cnt = 1;
  for(let i = 3; i <= n; i+=2) {
    const sqrt = ~~(Math.sqrt(i));
    let flag = true;
    for(let j = 2; j <= sqrt; j++) {
      if(i % j === 0) {
          flag = false;
          break;
      }
    }
    if(flag) cnt++;
  }
  return cnt;
}
