function solution(s) {
    return s.split(' ').map(el => {
        if(el === '') return
        el = el.toLowerCase();
        if(parseInt(el[0]) === NaN) return el;
        else return el.replace(el[0], el[0].toUpperCase());
    }).join(' ');
}