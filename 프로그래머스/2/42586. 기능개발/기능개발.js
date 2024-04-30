function solution(progresses, speeds) {
    let remainArr = progresses.map((progress, i) => {
        return Math.ceil((100 - progress) / speeds[i]);
    })
    let arr  = [remainArr[0]];
    
    for(let i = 1; i < remainArr.length; i++) {
        if(arr[arr.length - 1] < remainArr[i]) {
            arr.push(remainArr[i]);
        } else {
            arr.push(arr[arr.length - 1]);
        }
    }

    let countArr = [];
    let count =  0;
    let temp = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(temp !== arr[i]) {
            countArr.push(count)
            temp = arr[i];
            count = 0;
        }
        count++;
    }
    countArr.push(count);
    return countArr;
}