function solution(arr, divisor) {
	arr = arr.filter(el => el % divisor === 0)
	return arr.length ? arr.sort((a,b) => a-b) : [-1]
}