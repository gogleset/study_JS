/*
encodeURI(string)

encodeURI로 변환된 문자열을 원래의 문자열로 해석한다.

*/

let set1 = ';,/?:@&=+$#'; //예약문자
let set2 = "-_.!~*'()"; //비예약 표식
let set3 = 'ABC abc 123'; //알파벳 및 숫자
let set4 = '자바스크립트';


let enc1 = encodeURI(set1);
let enc2 = encodeURI(set2);
let enc3 = encodeURI(set3);
let enc4 = encodeURI(set4);
// 인코딩한 객체

console.log(decodeURI(enc1));
console.log(decodeURI(enc2));
console.log(decodeURI(enc3));
console.log(decodeURI(enc4));
// 를 다시 원래대로

