console.group("9)학생별 총점과 평균점수를 구하기 위한 소스코드를 아래와 같이 작성중이다. 빈 칸을 완성하시오. 단, 평균점수의 경우 toFixed() 함수를 사용하여 소수점 둘째 자리까지만 출력하시오.")

let student = ["둘리", "도우너", "또치", "희동"];

// 성적표 배열
let grade = [
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98],
];

let sum = 0;
let avg = 0;
let ssg = 0;
let ssg1 = 0;
// 반평균

for (i = 0; i < student.length; i++){
    sum = 0;
    for (j = 0; j < grade[i].length; j++){
        sum += grade[i][j]
    }
    avg = sum / grade[i].length;
    ssg += avg
    // grade i
    console.log("%s의 총점: %d점, 평균: %s점",student[i], sum, avg.toFixed(2))
}
ssg1 = ssg / student.length
console.log("반 평균 = %d",ssg1)
console.groupEnd();

console.group("10) 반 평균을 구하시오.")
// 반 평균은 학생의 평균점수 총 합/학생수로 구합니다.
// [주의] toFixed() 함수로 가공된 값은 문자열 형태이기 때문에 숫자 연산이 불가능합니다. 이를 감안하 여 반 점수를 구하세요.
console.group("10) 첫 줄에 있는 아이템을 판매한다고 할 때 이 유저가 벌어들이는 골드(G)의 총액은 얼마인가?");
// (판매를 위해 선택한 아이템의 상단에는 1개당 가격이 표시되고, 아이템을 판매할 때는 원래 가격의 90% 만 받을 수 있다고 한다.)- 가격과 아이템 수량의 정보를 2차 배열로 구성하는 소스코드를 완성하세요. ("단가-수량"을 한 세트로 하는 정보들을 배열로 구성하면 2차 배열 형태가 됩니다.)
// ");
const item = [500, 320, 100, 120, 92, 30];
const number = [291, 586, 460, 558, 18, 72];

let inventory = [item, number]
let z = 0;
let x = 0


for (let i = 0; i < inventory.length - 1; i++) {
    for(j = 0; j < item.length; j++){
        z += item[j]*number[j];
    }
 x = z * 0.9
}

    
console.log(x);
console.groupEnd();


