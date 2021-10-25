"use strict";

let sampleValue1 = 123;
console.log(typeof sampleValue1);

let sampleValue2 = true;
console.log(typeof sampleValue2);
// true-Boolean , false=0, true=0 아닌 모든 숫자(보통 1)

let sampleValue3 = "hello world";
console.log(typeof sampleValue3);
// 

let sampleValue4 = new Date();
console.log(typeof sampleValue4);
// Date-object

let sampleValue5 = null;
console.log(typeof sampleValue5);
// null-object 값이 없다는 것은 undefined랑 같지만, null값은 칸을 예약한다는 의미이고, undefined는 칸을 예약하지 않는 즉, 메모리에 공간을 배치하지 않는다는 것이 다른점이다.

let sampleValue6;
console.log(typeof sampleValue6);
// undefined = 값이 정의되지 않음 