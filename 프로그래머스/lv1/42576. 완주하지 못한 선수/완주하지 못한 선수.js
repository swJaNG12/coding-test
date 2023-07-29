function solution(par, com) {
    let parObj = createObj(par)
    let comObj = createObj(com)

    for(const person in parObj) {
        if(parObj[person] !== comObj[person]) return person
    }
}

function createObj(arr) {
    return obj = arr.reduce((acc, cur) => {
        acc[cur] = (acc[cur] ?? 0) + 1
        return acc
    }, {})
}

