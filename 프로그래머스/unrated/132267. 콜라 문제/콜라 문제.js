function solution(a,b,c) {
  let answer = 0;
  let sumCola = Infinity;
  while(sumCola >= a) {
    const getCola = ~~(c / a)*b;
    const leftCola = c % a;
    answer += getCola;
    sumCola = getCola + leftCola;
    c = sumCola;
  }
  return answer;
}
