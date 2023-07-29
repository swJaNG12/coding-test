function solution(nums) {
    let set = new Set(nums)
    let pickNum = nums.length / 2 
    return set.size > pickNum ? pickNum : set.size
}



// 이 문제를 푸는데 중요한 열쇠는
// 우리가 만들 맵의 사이즈가 배열의 길이의 절반보다 작다면
// 그 맵의 사이즈가 최종 결과가 된다.
// 만약 맵의 사이즈가 그것보다 크거나 같다면 그냥 배열의 절반 크기를 그대로 반환하면 된다.