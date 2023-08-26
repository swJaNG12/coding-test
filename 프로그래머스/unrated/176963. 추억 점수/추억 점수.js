function solution(name, yearning, photo) {
    const map = name.reduce((a,c, i) => {
        return a.set(c, yearning[i]);
    }, new Map());

    const answer = [];
    photo.forEach(persons => {
       let sum = 0;
        persons.forEach(person => {
            sum += map.get(person) || 0;
        })
        answer.push(sum);
    })
    return answer;
}
