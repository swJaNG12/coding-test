function solution(lottos, win_nums) {
    const min = win_nums.filter(v => lottos.includes(v)).length;
    const max = lottos.filter(v => !v).length + min;
    const obj = {6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6};
    return [obj[max], obj[min]];
    
}