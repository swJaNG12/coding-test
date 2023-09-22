function solution(num_list) {
    const even = num_list.filter(n => !(n % 2)).length;
    const odd = num_list.filter(n => n % 2).length;
    return [even, odd];
}