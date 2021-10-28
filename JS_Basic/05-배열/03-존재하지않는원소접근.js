// 100이라는 하나의 원소를 갖는 한 칸으로 구성된 배열
let myArr = [100];
console.log(myArr);

// 0번째 원소를 변수에 할당하고 출력 -> ok
let item1 = myArr[0];
console.log(item1);

// 100번쨰 원소를 변수에 할당하고 출력 -> fail
// myArr은 1개의 원소를 갖기 때문에 인덱스 번호는 0만 존재함
let item2 = myArr[100];
//배열바로다음의 배열은 인덱스 번호이다.
console.log(item2);

if (item2 !== undefined){
    // 만약 item2가 undefined가 아니라면 참
    console.log("100번째 원소 존재함")
} else {
    console.log("100번째 원소 존재하지 않음")
}