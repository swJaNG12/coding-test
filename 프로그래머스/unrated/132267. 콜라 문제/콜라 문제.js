function solution(a,b,n) {
  let result = 0;
  while(n >= a) {
    const getCola = ~~(n/a)*b;
    result += getCola
    n = getCola + n % a;
  }
  return result
}