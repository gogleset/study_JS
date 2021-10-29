// console.group("9)학생별 총점과 평균점수를 구하기 위한 소스코드를 아래와 같이 작성중이다. 빈 칸을 완성하시오. 단, 평균점수의 경우 toFixed() 함수를 사용하여 소수점 둘째 자리까지만 출력하시오.")

// let student = ["둘리", "도우너", "또치", "희동"];

// // 성적표 배열
// let grade = [
//     [78,89,96],
//     [62,77,67],
//     [54,90,80],
//     [100,99,98],
// ];

// let sum = 0;
// let avg = 0;
// let ssg = 0;
// let ssg1 = 0;
// // 반평균

// for (i = 0; i < student.length; i++){
//     sum = 0;
//     for (j = 0; j < grade[i].length; j++){
//         sum += grade[i][j]
//     }
//     avg = sum / grade[i].length;
//     ssg += avg
//     // grade i
//     console.log("%s의 총점: %d점, 평균: %s점",student[i], sum, avg.toFixed(2))
// }
// ssg1 = ssg / student.length
// console.log("반 평균 = %d",ssg1)
// console.groupEnd();

// console.group("10) 반 평균을 구하시오.")
// // 반 평균은 학생의 평균점수 총 합/학생수로 구합니다.
// // [주의] toFixed() 함수로 가공된 값은 문자열 형태이기 때문에 숫자 연산이 불가능합니다. 이를 감안하 여 반 점수를 구하세요.
// console.group("10) 첫 줄에 있는 아이템을 판매한다고 할 때 이 유저가 벌어들이는 골드(G)의 총액은 얼마인가?");
// // (판매를 위해 선택한 아이템의 상단에는 1개당 가격이 표시되고, 아이템을 판매할 때는 원래 가격의 90% 만 받을 수 있다고 한다.)- 가격과 아이템 수량의 정보를 2차 배열로 구성하는 소스코드를 완성하세요. ("단가-수량"을 한 세트로 하는 정보들을 배열로 구성하면 2차 배열 형태가 됩니다.)
// // ");
// const item = [500, 320, 100, 120, 92, 30];
// const number = [291, 586, 460, 558, 18, 72];

// let inventory = [item, number]
// let z = 0;
// let x = 0


// for (let i = 0; i < inventory.length - 1; i++) {
//     for(j = 0; j < item.length; j++){
//         z += item[j]*number[j];
//     }
//  x = z * 0.9
// }

    
// console.log(x);
// console.groupEnd();


// # 배열 연습문제 2

// ## 문제 12.

// 자신의 주민번호 한 글자씩 모든 숫자를 원소로 갖는 배열 jumin을 아래와 같이 정의하시오.

// ```js
// ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3]
// ```

// 정의된 배열을 활용하여 유요한 주민등록번호인지 아닌지를 판별하는 코드를 구현해보자. 판별 방법은 아래와 같다.

// - 기본 주민등록코드에는 각 숫자에 대응하는 가중치가 있다. 가중치는 주민등록번호의 순서에 따라 `2 3 4 5 6 7 8 9 2 3 4 5` 이다.
// - 먼저 마지막 숫자는 제외하고, 기본코드의 각 12자리와 가중치를 모두 곱하여 합한다.
// - 합한 값을 11로 나눈 나머지 값을 구한다.
// - 11에서 그 나머지 값을 뺀 후, 이를 10을 나눈 나머지를 구한다.
// - 나머지의 1의 자리 값과 주민등록번호 마지막 자리 값이 맞아야 유효한 주민등록번호이다.

// let ssn = [9,7,1,1,3,0,1,0,4,2,8,1,7]
// let ssx = [2,3,4,5,6,7,8,9,2,3,4,5]
// let sum = 0;
// let sec = 0;
// let sim = 0;

// for (i = 0; i < ssx.length; i++){
//     sum += ssn[i] * ssx[i]
// }
// sec = sum % 11
// sim = (11 - sec) % 10 
// console.log("%d",sim)








// ## 문제 13.

// 아래의 배열에서 중복되는 값이 제거된 배열을 unique_data를 만드시오.

// ```
data = [1, 3, 3, 2, 1, 1, 4, 5, 5, 1, 3];
let unique_data = [];

for (let i = 0; i < data.length; i++) {
    for(let j = i+1; j < data.length; j++){
        if (data[i] === data [j]){
            data[j] = 0;
            // data의 배열에서 0이 아닌것을 unique에 넣고 싶다.
        } 
    }
    
}

console.log(data);
console.log(unique_data);
