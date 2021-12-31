// JS에 추가된지 얼마 되지 않은 문법이므로 IE는 사용불가
// ES5에서 존재하지 않는 key 혹은 멤버변수에 접근하는 경우
const user = {};

// user 안에 address가 정의되지 않았으므로 undefined
console.log(user.address);

// address자체가 정의되지 않은 상태에서 하위 기능으로 접근하면 에러 발생함.
// console.log(user.address.city);

// ES5의 해결책 --> 단계별로 객체가 존재하는지 검사
console.log(user && user.address && user.address.city);

// "객체이름?"는 해당 객체가 undefined나 null이면 평가를 중지하고 undefined를 반환한다.
//  옵셔널 체이닝은 존재하지 않아도 괜찮은 대상에게만 사용하고
//  반드시 존재해야 하는 객체에게는  if문으로 존재여부를 검사하는 유효성 검사를 수행하는 것이 좋다
console.log(user?.address?.city);

console.log("프로그램종료!");