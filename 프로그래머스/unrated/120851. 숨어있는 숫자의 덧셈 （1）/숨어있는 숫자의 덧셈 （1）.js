function solution(my_string) {
    return my_string.match(/[0-9]/g).map(Number).reduce((a,c) => a+c, 0)
}