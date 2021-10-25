/** 1) 사칙 연산 출력하기 */
console.group("1) 사칙 연산 출력하기");
const a = 5;
const b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.groupEnd();

/** 2) 연산 결과를 다른 변수에 할당 */
console.group("2) 연산 결과를 다른 변수에 할당");
const x = 5;
const y = 3;
const z = x + y - 2;
console.log(z);
console.groupEnd();

/** 3) 나눗셈 주의사항 */
console.group("3) 나눗셈 주의사항");
console.group("일반적인 나눗셈");
// 일반적인 나눗셈
const myValue1 = 10;
const myValue2 = 4;
console.log(myValue1 / myValue2);
console.groupEnd();

console.group("나누어 떨어지지 않는 나눗셈");
// 나누어 떨어지지 않는 나눗셈
const myValue3 = 4;
const myValue4 = 3;
console.log(myValue3 / myValue4);
console.groupEnd();
console.groupEnd();
// 컴퓨터가 계산할 수 있을 정도까지 계산

/** 4) 문자열 연산 */
console.group("4) 문자열 연산");
console.group("문자열 끼리의 덧셈");
// 문자열 끼리의 덧셈
const myString1 = "Hello";
const myString2 = "World";
console.log(myString1 + myString2);
console.groupEnd();

console.group("문자열과 다른 타입의 덧셈");
// 문자열과 다른 타입의 덧셈
console.log("안녕하세요." + 123);
console.log("안녕하세요." + true);
console.log("안녕하세요." + null);
console.groupEnd();
console.groupEnd();
// 문자열은 전염성이 커서 합치면 물들인다.