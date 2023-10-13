function solution(brown,yellow) {
    let a = 2;
    let b = 4 - brown;
    let c = 2 * yellow;
    const r1 = ((-b + Math.floor(Math.sqrt(b*b -4*a*c)))/(2*a));
    const r2 = ((-b - Math.floor(Math.sqrt(b*b -4*a*c)))/(2*a));

    return [Math.max(r1,r2)+2, Math.min(r1,r2)+2];
}