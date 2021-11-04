// 
// parseInt(value, int)
// 
// 첫번째 파라미터 10진 정수값으로 변환한다.
// 두 번째 파라미터 value가 어떤 진법인지를 알려주는 값.(기본값 = 10)
// 문자열의 선행 공백은 무시함.

// 0 1 2 3 4 5 6 7 8 9 A B C D E F
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15


// 15로 변환되는 예제들
console.log(parseInt('0xF', 16));
console.log(parseInt('F', 16));
console.log(parseInt('17', 8));
console.log(parseInt(021, 8));
console.log(parseInt('015', 10));
console.log(parseInt(15.99, 10));
console.log(parseInt('15,123', 10));
console.log(parseInt('FXX123', 16));
console.log(parseInt('1111', 2));
console.log(parseInt('15*3', 10));
console.log(parseInt('15e2', 10));
console.log(parseInt('15px', 10));

// -15를 반환하는 예제들
console.log(parseInt("-F", 16));
console.log(parseInt("-0F", 16));
console.log(parseInt("-0XF", 16));
console.log(parseInt(-15.1, 10));
console.log(parseInt("-17", 8));
console.log(parseInt(" -15", 10));
console.log(parseInt("-1111", 2));
console.log(parseInt("-15e1", 10));

// NaN을 반환하는 예제들
console.log(parseInt("Hello", 8)); //전부 숫자가 아님

