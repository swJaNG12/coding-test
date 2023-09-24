function solution(keymap, targets) {
  const answer = [];
  for(let i = 0; i < targets.length; i++) {
    const target = targets[i];        
    let sum = 0;
      
    for(let j = 0; j < target.length; j++) {
      const s = target[j];
      let cnt = [];
      
      for(let k = 0; k < keymap.length; k++) {
        let key = keymap[k];
        let touchCnt = key.indexOf(s);
        if(touchCnt !== -1) cnt.push(touchCnt);
      }

     if(cnt.includes(-1) || !cnt.length) {
        sum = -1
        break;
      } else {
        sum += Math.min(...cnt)+1;
      }
    }
    
    answer.push(sum);
  }
  return answer;
}