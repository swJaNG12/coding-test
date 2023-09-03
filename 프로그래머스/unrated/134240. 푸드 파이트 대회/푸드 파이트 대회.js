function solution (food) {
  let half = food.map(n => ~~(n/2)).map((n,i) => i.toString().repeat(n)).join('');
  return half + '0' + half.split('').reverse().join('')
}