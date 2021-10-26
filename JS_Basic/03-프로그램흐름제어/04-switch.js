// 1)switch 기본 구문
console.group("1)switch 기본 구문");

const 국어 = "B";

// 조건에 맞는 case 블록부터 break 키워드를 만날때까지 실행한다.
switch (국어) {
  case "A":
    console.log("a학점입니다.");
    break;
  case "B":
    console.log("b학점입니다.");
    break;
  case "c":
    console.log("c학점입니다.");
    break;
  default:
    console.log("c학점 미만입니다.");
    break;
}
console.groupEnd();

// 2) break가 없는 경우
console.group("2) break가 없는 경우");

const 영어 = "B";

switch (영어) {
  case "A":
    console.log("A학점입니다.");
  case "B":
    console.log("B학점입니다.");
  case "C":
    console.log("C학점입니다.");
  default:
    console.log("C학점미만입니다.");
}
console.groupEnd();

// 3)의도적으로 break 조절하기
// case는 다르지만 수행해야 할 로직이 동일한 경우 의도적으로 break의 위치를 조절할 수 있다.
console.group("3)의도적으로 break 조절하기");

const 수학 = "B";

switch (수학) {
  case "A":
  case "B":
  case "C":
    console.log("통과입니다.");
    break;
  default:
    console.log("통과하지 못했습니다.");
    break;
}

console.groupEnd();

// 4)break 조건을 식으로 설정하는 경우
console.group("4)break 조건을 식으로 설정하는 경우");

const 과학 = 72;

// 수식이 비교식이므로 case는 true/false에 대한 경우의 수가 되어야한다.
switch (과학 > 70) {
  case true:
    console.log("이 과목을 통과했습니다.");
    break;
  default:
    console.log("이 과목을 통과하지 못했습니다.");
}
console.groupEnd();
