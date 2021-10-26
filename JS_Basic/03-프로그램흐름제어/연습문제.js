console.group("1번 문제")
const 과학 = 72;


if (과학 > 70){
    console.log("이 과목을 pass 했습니다.")
} else {
    console.log("이 과목을 pass하지 못했습니다.")
}
console.groupEnd();



switch (과학 > 70) {
    case true:
        console.log("이 과목을 Pass 했습니다.");
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다.");
        break;
}




// 2. 다음의 소스코드를 if문으로 재구성하시오.
console.group("2번 문제")
const 국어 = "B"
if (국어 === "A") {
    console.log("A학점 입니다.");
} else if (국어 ==="B"){
    console.log("B학점 입니다.");
} else if (국어 ==="C"){
    console.log("C학점 입니다.");
} else {
    console.log("C학점 미만 입니다.");
}
console.groupEnd();

// 답
switch (국어) {
    case 'A':
        console.log("A학점 입니다.");
        break;
    case 'B':
        console.log("B학점 입니다.");
        break;
    case 'C':
        console.log("C학점 입니다.");
        break;
    default:
        console.log("C학점 미만 입니다.");
        break;
}


// 3
console.group("3번 문제")
const 영어 = "B";


if (영어 == "A") {
    console.log("A학점 입니다.");
    console.log("B학점 입니다.");
    console.log("C학점 입니다.");
    console.log("C학점 미만 입니다.");
} else if (영어 == "B"){
    console.log("B학점 입니다.");
    console.log("C학점 입니다.");
    console.log("C학점 미만 입니다.");
} else if (영어 == "C"){
    console.log("C학점 입니다.");
    console.log("C학점 미만 입니다.");
} else {
    console.log("C학점 미만 입니다.");
}
console.groupEnd();
if (영어) {

}


// 답
switch (영어) {
    case 'A':
        console.log("A학점 입니다.");
    case 'B':
        console.log("B학점 입니다.");
    case 'C':
        console.log("C학점 입니다.");
    default:
        console.log("C학점 미만 입니다.");
}
