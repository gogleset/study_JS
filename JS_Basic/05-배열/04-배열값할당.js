// 5칸으로 구성된 빈 배열 생성
const myArr = new Array(5);
console.log(myArr);

// 배열의 길이
const len = myArr.length;
// 배열.length는 배열의 인덱스 주소의 값보다 하나 많음
console.log("배열의 길이는 %d",len);

// 0부터 배열의 길이보다 작은 동안 반복
// 0~4

for(let i = 0; i < len; i++){
    // i 초기화, i는 배열의 길이보다 적을때, 1증가해라
    myArr[i] = i * 10;
    // myArr의 i번째 index주소에 i*10의 값을 넣어라
}

console.log(myArr);
// 출력