// 1) 이상, 이하, 초과, 미만
let x = 100;
let y = 50;

let compare1 = x >= y; //이상 -true
let compare2 = x > y; //초과 -true
let compare3 = x <= y; //이하 -false
let compare4 = x < y; //미만 -false

console.group("1) 이상, 이하, 초과, 미만");
console.log(compare1);
console.log(compare2);
console.log(compare3);
console.log(compare4);
console.groupEnd();
// 비교 연산자는 불리언 타입을 배출함 true, false


// 2) 같다
let a1 = "1";
let a2 = 1;
let a3 = 1.0;
let a4 = true;

console.group("2) 같은지 비교");
console.group("내용만 비교하는 경우")
console.log(a1 == a2); // 두 값이 같으므로 결과는 true
console.log(a1 == a3); // 두 값이 같으므로 결과는 true
console.log(a1 == a4); // 두 값이 같으므로 결과는 true


console.log(a2 == a3); // 두 값이 같으므로 결과는 true
console.log(a2 == a4); // 두 값이 같으므로 결과는 true

console.log(a3 == a4); // 두 값이 같으므로 결과는 true
console.groupEnd();

console.group("데이터 타입까지 비교하는 경우")
console.log(a1 === a2); // 두 값이 다르므로 결과는 false
console.log(a1 === a3); // 두 값이 다르므로 결과는 false
console.log(a1 === a4); // 두 값이 다르므로 결과는 false


console.log(a2 === a3); // 두 값이 같으므로 결과는 true
console.log(a2 === a4); // 두 값이 다르므로 결과는 false

console.log(a3 === a4); // 두 값이 다르므로 결과는 false
console.groupEnd();
console.groupEnd();


// 3) 다르다
let b1 = "1";
let b2 = 1;
let b3 = 1.0;
let b4 = true;


console.group("3)다른지 비교")
console.group("내용만 비교하는 경우")
console.log(b1 != b2); // 두 값이 같으므로 결과는 false
console.log(b1 != b3); // 두 값이 같으므로 결과는 false
console.log(b1 != b4); // 두 값이 같으므로 결과는 false


console.log(b2 != b3); // 두 값이 같으므로 결과는 false
console.log(b2 != b4); // 두 값이 같으므로 결과는 false

console.log(b3 != b4); // 두 값이 같으므로 결과는 false
console.groupEnd();

console.group("데이터타입까지 비교하는 경우")
console.log(b1 !== b2); // 두 값이 다르므로 결과는 true
console.log(b1 !== b3); // 두 값이 다르므로 결과는 true
console.log(b1 !== b4); // 두 값이 다르므로 결과는 true


console.log(b2 !== b3); // 두 값이 같으므로 결과는 false
console.log(b2 !== b4); // 두 값이 다르므로 결과는 true

console.log(b3 !== b4); // 두 값이 다르므로 결과는 true
console.groupEnd();
console.groupEnd();