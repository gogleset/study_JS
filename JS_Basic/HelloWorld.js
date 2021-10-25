"use strict"; 
// 엄격모드 적용 --> ES6가 등장하면서 함께 추가된 ES5의 변경사항을 활성화 시킴


console.group("group1");
// 출력하는 내용을 그룹으로 묶음
console.log("안녕하세요, 자바스크립트1");
console.log("안녕하세요, 자바스크립트2");
console.log("안녕하세요, 자바스크립트3");
// consol에 출력하는 코드 consol.log
console.groupEnd();
// 그룹으로 묶기 끝!


// 그룹 중첩실행하기
console.group("group2")
console.log("안녕하세요, 자바스크립트4");
console.group("group2-1")
// 그룹 안에 그룹으로 묶기
console.log("안녕하세요, 자바스크립트5");
console.log("안녕하세요, 자바스크립트6");
console.groupEnd();
//  소그룹 묶기 끝!
console.groupEnd();
//  대그룹 묶기 끝!
