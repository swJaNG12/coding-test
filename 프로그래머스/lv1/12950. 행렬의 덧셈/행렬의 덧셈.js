function solution(arr1, arr2) {
    return arr1.map((v1, i) => {
        return v1.map((v2, i2) => v2 + arr2[i][i2])
    })
}