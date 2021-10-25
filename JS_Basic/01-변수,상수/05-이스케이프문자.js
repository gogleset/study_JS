/** 이스케이프 문자 */

// 출력할 문자열에 포함하여 변수로 치환할 수 있는 특수문자.

// %d - 모든 종류의 숫자.
// %s - 문자열
// %o - 객체
// %j - JSON 타입

// 기본 데이터 타입
const num = 123
const str = "hello";
const bool = true;
// 추후 살펴보게 될 데이터 타입
const obj = new Date();             // 객체
const arr = [1,2,3];                // 배열 (객체의 일종)
const json = {"a": 123, "b": 234}   // JSON (객체의 일종)

// %d는 오직 숫자와 논리값만 표현가능
console.group("숫자값 출력하기")
console.log("숫자값 출력하기=%d", num);     // 정상
console.log("숫자값 출력하기=%d", str);     // 숫자가 아니므로 NaN
console.log("숫자값 출력하기=%d", true);    // false는 0, true는 0이외의 모든 수에 대응됨(보통 1로 표현)
console.log("숫자값 출력하기=%d", obj);     // 객체에 대한 Hash값 출력
console.log("숫자값 출력하기=%d", arr);     // 숫자가 아니므로 NaN
console.log("숫자값 출력하기=%d", json);     // 숫자가 아니므로 NaN
console.groupEnd();

// %s는 사실상 만능
console.group("문자열 출력하기");
console.log("문자열 출력하기=%s", num);     // 정상    
console.log("문자열 출력하기=%s", str);     // 정상
console.log("문자열 출력하기=%s", true);    // 정상
console.log("문자열 출력하기=%s", obj);     // 정상
console.log("문자열 출력하기=%s", arr);     // 정상
console.log("문자열 출력하기=%s", json);    // 정상
console.groupEnd();

console.group("객체 출력하기");
console.log("객체 출력하기=%o", num);     // 정상    
console.log("객체 출력하기=%o", str);     // 정상 (따옴표가 적용됨)
console.log("객체 출력하기=%o", true);    // 정상
console.log("객체 출력하기=%o", obj);     // 정상
console.log("객체 출력하기=%o", arr);     // 정상
console.log("객체 출력하기=%o", json);    // 정상
console.groupEnd();

console.group("JSON 출력하기");
console.log("JSON 출력하기=%j", num);     // 정상    
console.log("JSON 출력하기=%j", str);     // 정상 (따옴표가 적용됨)
console.log("JSON 출력하기=%j", true);    // 정상
console.log("JSON 출력하기=%j", obj);     // 정상
console.log("JSON 출력하기=%j", arr);     // 정상
console.log("JSON 출력하기=%j", json);    // 정상
console.groupEnd();

// 이스케이프 문자의 복합사용.
const student = "자바스크립트학생";
const age = 20;
console.group("복합사용");
console.log("%s님의 나이는 %d세 입니다.", student, age);
// 순서에 맞게 써야함. 즉 %의 개수와 뒤에 상수및 변수와 갯수를 맞춰주면 순서대로 출력한다.
console.groupEnd();


// 이스케이프 문자는 크게 %d는 숫자만 표현, %s, %o, %j는 만능이라 생각하면 된다.

