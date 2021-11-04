let set1 = ';,/?:@&=+$#'; //예약문자
let set2 = "-_.!~*'()"; //비예약 표식
let set3 = 'ABC abc 123'; //알파벳 및 숫자
let set4 = '자바스크립트';

// decodeURIComponent(string)
// encodeURIComponent()로 인코딩 된 문자열을 원래의 문자열로 해석한다.

let enc1 = encodeURIComponent(set1);
let enc2 = encodeURIComponent(set2);
let enc3 = encodeURIComponent(set3);
let enc4 = encodeURIComponent(set4);

console.log(decodeURIComponent(enc1));
console.log(decodeURIComponent(enc2));
console.log(decodeURIComponent(enc3));
console.log(decodeURIComponent(enc4));
