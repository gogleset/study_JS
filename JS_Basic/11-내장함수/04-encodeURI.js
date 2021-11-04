// 인터넷 주소는 한글 및 띄어쓰기 특수문자는 들어가지 않는다.
// 인코딩은 어떤 형식에 맞춰 변환하는 것을 의미함.

/*
encodeURI(string)

주어진 문자열 URL에 포함시키기 적절한 형태로 변환(=인코딩)하는 처리
인코딩 하지 않는 문자{
    A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! * ' ( ) #
}
*/

var set1 = ';,/?:@&=+$#'; //예약문자
var set2 = "-_.!~*'()"; //비예약 표식
var set3 = 'ABC abc 123'; //알파벳 및 숫자
var set4 = '자바스크립트';

console.log(encodeURI(set1)); //;,/?:@&=+$#
console.log(encodeURI(set2)); //-_.!~*'()
console.log(encodeURI(set3)); //ABC abc 123(공백은    로 인코딩)
console.log(encodeURI(set4));

