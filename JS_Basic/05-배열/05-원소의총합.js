const data = [10, 20, 30, 40, 50];  
// 총 합을 구할때에는 항상 누적합을 구할 변수를 마련해야함
let sum = 0;
// 반복을 수행해야 한다.

// 배열의 모든 원소에 대한 반복문 구성
for (let i = 0; i < data.length; i++){
    // i 초기화, i 는 배열의 길이보다 작을때 1씩 증가해라
    // i번째 원소를 sum에 누적합산
    sum += data[i];
    // 누적합 벼눗에 data배열의 i번째 값을 누적
}

console.log("data의 총합: %d", sum);

// 평균은 총 합을 원소의 길이로 나눈 값
const avg = sum / data.length;
console.log("data의 평균: %d", avg)