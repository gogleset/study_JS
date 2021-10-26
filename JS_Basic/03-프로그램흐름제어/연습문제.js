console.group("1번 문제")
const 과학 = 72;


if (과학 > 70){
    console.log("이 과목을 pass 했습니다.")
} else {
    console.log("이 과목을 pass하지 못했습니다.")
}
console.groupEnd();



// switch (과학 > 70) {
//     case true:
//         console.log("이 과목을 Pass 했습니다.");
//         break;
//     default:
//         console.log("이 과목을 Pass하지 못했습니다.");
//         break;
// }




// 2. 다음의 소스코드를 if문으로 재구성하시오.
console.group("2번 문제")
const 국어 = "B"
if (국어 === "A") {
    console.log("A학점 입니다.");
} else if (국어 ==="B"){
    console.log("B학점 입니다.");
} else if (국어 ==="C"){
    console.log("C학점 입니다.");
} else {
    console.log("C학점 미만 입니다.");
}
console.groupEnd();

// 답
// switch (국어) {
//     case 'A':
//         console.log("A학점 입니다.");
//         break;
//     case 'B':
//         console.log("B학점 입니다.");
//         break;
//     case 'C':
//         console.log("C학점 입니다.");
//         break;
//     default:
//         console.log("C학점 미만 입니다.");
//         break;
// }


// 3
console.group("3번 문제")
const 영어 = "B";


if (영어 == "A") {
    console.log("A학점 입니다.");
    console.log("B학점 입니다.");
    console.log("C학점 입니다.");
    console.log("C학점 미만 입니다.");
} else if (영어 == "B"){
    console.log("B학점 입니다.");
    console.log("C학점 입니다.");
    console.log("C학점 미만 입니다.");
} else if (영어 == "C"){
    console.log("C학점 입니다.");
    console.log("C학점 미만 입니다.");
} else {
    console.log("C학점 미만 입니다.");
}
console.groupEnd();
if (영어) {

}


// 답
// switch (영어) {
//     case 'A':
//         console.log("A학점 입니다.");
//     case 'B':
//         console.log("B학점 입니다.");
//     case 'C':
//         console.log("C학점 입니다.");
//     default:
//         console.log("C학점 미만 입니다.");
// }

console.group("3번 재수정")
const 수학 = "B";

// switch (수학) {
//     case 'A':
//     case 'B':
//     case 'C':
//         console.log("이 과목을 Pass 했습니다.");
//         break;
//     default:
//         console.log("이 과목을 Pass하지 못했습니다.");
//         break;
// }

if (수학 || "A" || "B" || "C"){
    console.log("이 과목을 Pass 했습니다.");
} else{
    console.log("이 과목을 Pass하지 못했습니다.");
}
console.groupEnd();

console.group("4번 문제");
//4. 7의 팩토리얼은 얼마인지 출력하는 프로그램을 while문으로 작성하시오.
// 7의 팩토리얼 = 7,6,5,4,3,2,1을 다 곱한 총합의 수
let x = 1;
let y = 1;

while(y < 7) { // 조건식 --> i의 범위 : 1~10
    y++
    x *= y; //증감식
}
console.log("7의 팩토리얼은 %d이다.",x );
console.groupEnd();

console.group("5번 문제")
// 구구단 6단의 결과값에 대한 총 합은 얼마인지 출력하는 프로그램을 while문으로 작성하시오.
let y1 = 1;
let x1 = 0;
while (y1 < 10){
    let z1 = 6 * y1;
    x1 += z1;
    ++y1;
}
console.log("구구단 6단의 총합은 %d이다.",x1);


console.groupEnd();

console.group("6번 문제");
// 구구단 8단의 결과값을 모두 더한 값이 홀수인지 짝수인지를 판별하는 프로그램을 작성하시오.
let y2 = 1;
let x2 = 0;
while (y2 < 10){
    let z2 = 8 * y2;
    x2 += z2;
    ++y2;
}
console.log("구구단 8단의 총합은 %d이다.",x2);
if (x2 % 2 === 0){
    console.log("짝수입니다.");
} else {
    console.log("홀수입니다.");
}
console.groupEnd();

console.group("7번 문제");
// 7의 팩토리얼은 얼마인지 출력하는 프로그램을 for문으로 작성하시오.
let x3 = 1;

for (let i = 1; i < 8; i++) {
  x3 *= i;
}

console.log(x3);
// expected output: "012345678"

console.groupEnd();

console.group("8번 문제");
// 구구단 6단의 결과값에 대한 총 합은 얼마인지 출력하는 프로그램을 for문으로 작성하시오.
let x4 = 0;
for (let i = 1; i < 10; i++){
    x4 += 6 * i;
}
console.log("구구단 6단의 총합은 %d입니다.",x4)

console.groupEnd();

console.group("9번 문제");
// 구구단 8단의 결과값을 모두 더한 값이 홀수인지 짝수인지를 판별하는 프로그램을 작성하시오.
let x5 = 0;
for (let i = 0; i < 10; i++){
    x5 += 8 * i
}
console.log("구구단 8단의 총합은 %d입니다.",x5)
switch (x5 % 2 === 0){
    case true:
        console.log("짝수입니다.");
        break;
    default: 
        console.log("홀수입니다.");
}
// 삼항 연산자
const z4 = x5 % 2 === 0 ? "짝수입니다.":"홀수입니다."
console.log(z4);
console.groupEnd();

