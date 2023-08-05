function solution(n, arr1, arr2) {
    return arr1.map((el, i) => {
        return (el | arr2[i])
                            .toString(2)
                            .padStart(n,'0')
                            .replaceAll('1','#')
                            .replaceAll('0',' ')
    })
}