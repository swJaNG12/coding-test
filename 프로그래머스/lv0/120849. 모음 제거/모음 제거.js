function solution(my_string) {
    let vewols = ['a','e','i','o','u'];
    return my_string.split('').filter(s => !vewols.includes(s)).join('');
}