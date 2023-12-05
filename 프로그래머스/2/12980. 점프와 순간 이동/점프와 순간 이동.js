function solution(n) {
    let currentPosition = n;
    let batteryUsage = 0;
    
    while(currentPosition > 0) {
        const isEven = currentPosition % 2 === 0;
        
        if(isEven) {
            currentPosition /= 2;
        } else {
            currentPosition -= 1;
            batteryUsage += 1;
        }
    }
    
    return batteryUsage;
}
