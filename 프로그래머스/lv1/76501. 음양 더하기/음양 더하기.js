function solution(absolute, signs) {
    absolute.forEach((el,i) => signs[i] ? absolute[i] = el : absolute[i] = -el)
    return absolute.reduce((acc, cur) => acc + cur)
}