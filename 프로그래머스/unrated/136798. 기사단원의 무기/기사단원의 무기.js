function solution(number, limit, power) {
    let sum = 0;
    for(let i = 1; i <= number; i++) {
        let atk = makeAtk(i);
        if(atk > limit) atk = power;
        sum += atk;
    }
    return sum;
}

function makeAtk(num) {
    const set = new Set();
    const sqrt = Math.sqrt(num);
    for(let i = 1; i <= sqrt; i++) {
        if(!(num % i)) {
            set.add(i);
            set.add(num / i);
        }
    }
    return set.size;
}