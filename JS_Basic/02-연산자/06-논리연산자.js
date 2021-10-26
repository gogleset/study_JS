// 1)and &&
console.group("1)and &&");
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.groupEnd();
// 모든 불리언 타입이 트루일때 true를 출력

// 2)and 연산 여러개 사용
console.group("2)and 연산 여러개 사용");
console.log(true && true && true); //true
console.log(true && false && true); //false
console.log(false && true  && false); //false
console.log(false && false && true); //false
console.groupEnd();
// 즉, 모든 불리언 타입의 결과가 true일때만 true 출력!

// 3) or ||
console.group("3) or ||");
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.groupEnd();
// 즉, 불리언 타입 중 하나만 참이어도 true 출력

// 4)or 연산 여러개 사용
console.group("4)or 연산 여러개 사용");
console.log(true || true || true); //true
console.log(true || false || true); //true
console.log(false || true  || false); //true
console.log(false || false || true); //true
console.log(false || false || false); //false
console.groupEnd();

//5) and와 or의 복합사용
console.group("5) and와 or의 복합사용");
console.log(true && true || true); //true
console.log(true && true || false); //true
console.log(false && false || true); //true
console.log(false && true  || true); //true

console.log(true || true && true); //true
console.log(true || true && false); //true
console.log(false || false && true); //true
console.log(false || true && true); //true

console.groupEnd();

// 6) not !
console.group("6) not ");
let success = true;
let fail = !true;
console.log(fail);

let k = 1; //숫자 1은 논리값으로 변환 시 true이므로 !k는 not true -> false 반환
console.log(!k);


let l = 0; //숫자 0은 논리값으로 변환 시 false이므로 !k는 not false -> true 반환
console.log(!l);


let str1 = "helloworld!" //비어있지 않은 문자열은 true로 환산되므로 !str1 = not true -> false
console.log(!str1);

let str2 ="" // 빈 문자열은 false로 환산되므로 !str2는 not false -> true
console.log(!str2)
console.groupEnd()



