// 1)다음의 소스코드는 boolean 데이터를 저장하고 있는 배열에 대한 어떤 처리를 보여준다.
// 실행 결과에서 제시하는 것과 같이 배열에 저장되어 있는 값들을 반전(true는 false로, false는 true로) 변환하는 처리를 완성하시오.
// console.group("1)다음의 소스코드는 boolean 데이터를 저장하고 있는 배열에 대한 어떤 처리를 보여준다. 실행 결과에서 제시하는 것과 같이 배열에 저장되어 있는 값들을 반전(true는 false로, false는 true로) 변환하는 처리를 완성하시오.")


// let check_list = [true, false, false, true, false];
// console.log("before -->" + check_list);

// for (i = 0; i < check_list.length; i++) {
//     // i가 5번 이하로 반복
//     if (check_list[i] === true) {
//         check_list[i] = false;
//     } else {
//         check_list[i] = true;
//     }
// }
// console.log("after --> " + check_list)
// console.groupEnd();


// console.group("2)학생의 총점과 평균점수를 구하는 프로그램에 대한 아래의 소스코드를 완성하시오.")

// let grade = [75,82,91]
// // 학생의 점수
// let sum = 0;
// // 총점
// let avg = 0;
// // 평균
// for(i = 0; i < grade.length; i++) {
//     sum += grade[i];
//     // 총점에 점수를 더해주기
//     avg = sum / grade.length 
//     // 평균은 총점 나누기 배열의 갯수
// }
// avg = avg.toFixed(2);
// console.log("총점" + sum +"점", "평균점수" + avg + "점");
// console.groupEnd();


// console.group("3)주말에는 7시간, 평일에는 5시간을 일하기로 했지만, 금요일에 다른 직원의 사정으로 대신 근무를 하게 되어 10시간을 일했다.이 학생의 시급이 4,500이었지만 목요일부터는 5,200원으로 올랐다고 할 때 일주일간의 총 급여를 구하 는 프로그램을 작성하시오.");

// let time = [7,5,5,5,5,10,7];
// let money = 0;



// for(i = 0; i < time.length; i++) {
//     time[i]
//     // 일 월 화 수 목 금,토 | 0, 1, 2, 3, 4, 5, 6
//     if (i > 3){
//         money += time[i] * 4500
//     } else {
//         money += time[i] * 5200
//     }
// }
// 

// let x = (1 < 4) ?  4500 : 5200;
// money += time[i] * x;
// money += time[i] *((i<4)? 4500:5200);



// console.log("1주일간의 전체급여" + money + "원");
// console.groupEnd();

// console.group("4)상품의 가격을 원소로 갖는 1차 배열 price와 각 상품의 수량을 원소로 갖는 1차 배열 qty를 다음과 같 이 정의하였을 때 이 사람이 총 얼마를 결제해야 하는지 총 결제금액을 구하는 프로그램을 작성하시오.")

// let price = [38000, 20000, 17900, 17900];
// let qty = [6,4,3,5];
// let money1 = 0;

// for (i = 0; i <price.length; i++){
//     money1 += price[i] * qty[i];
// }


// console.log("전체 결제금액:" + money1 + "원");
// console.groupEnd();

// console.group("5)문제 4번의 장바구니 내역에서 상품금액(판매가*수량)이 가장 비싼 항목은 얼마인지 출력하시오.")

// let price1 = [38000, 20000, 17900, 17900];
// let qty1 = [6,4,3,5];
// let money2 = 0;

// let price2 = price1[0]*qty[0]

// for (i = 0; i < price1.length; i++){
//     // price와 qty의 총합을 계속 비교해야함.
//     money2 = price[i] * qty[i];
//     // 총합
//     if (money2 > price2){
//         // 총합이 프라이스 투 보다 크다면
//         price2 = money2;
//     }
// }
// console.log(price2);
// console.groupEnd();

// console.group("6) 문제4번의 장바구니 내역에서는 모든 장바구니 상품이 개별 배송이라고 한다. 상품금액(판매가*수량)이 8만원 이상인 경우 무료로 배송이 된다고 할 때 무료로 배송되는 항목은 모두 몇 개 인지 구하는 프로그램을 구현하시오.")

// let price1 = [38000, 20000, 17900, 17900];
// let qty1 = [6,4,3,5];
// let money2 = 0;
// let count = 0;

// let price2 = price1[0]*qty[0]

// for (i = 0; i < price1.length; i++){
//     // price와 qty의 총합을 계속 비교해야함.
//     money2 = price[i] * qty[i];
//     // 총합
//     if (money2 >= 80000){
//         // 총합이 프라이스 투 보다 크다면
//         price2 = money2;
//         count++
//     }
// }

// console.log("무료배송항목:%d", count);
// console.groupEnd();

console.group("11) 첫 줄에 있는 아이템을 판매한다고 할 때 이 유저가 벌어들이는 골드(G)의 총액은 얼마인가?");
// (판매를 위해 선택한 아이템의 상단에는 1개당 가격이 표시되고, 아이템을 판매할 때는 원래 가격의 90% 만 받을 수 있다고 한다.)- 가격과 아이템 수량의 정보를 2차 배열로 구성하는 소스코드를 완성하세요. ("단가-수량"을 한 세트로 하는 정보들을 배열로 구성하면 2차 배열 형태가 됩니다.)
// ");
const item = [500, 320, 100, 120, 92, 30];
const number = [291, 586, 460, 558, 18, 72];

let inventory = [item, number];
let z = 0;
//90프로 적용된 판매가격


 for(i = 0; i < item.length; i++){
      z += item[i]*number[i]*0.9;
 }

    
console.log("%dG",z);
console.groupEnd();





// console.group("7)아래의 소스코드는 위의 상품 목록에서 상품의 가격을 원소로 하는 배열 money를 정의하였을 때 “낮은 가격순”버튼이 눌러졌을 때 상품의 가격을 재정렬하기 위한 코드에 대한 일부이다. 빈 칸을 채워넣어 완성하시오");

// let price = [209000, 109000, 119000, 109000, 94000];

// console.log("상품가격 -->" + price);

// for (let i = 0;i < price.length - 1; i++){
//         // 
//     for(let j = i + 1; j < price.length; j++){
//         if(price[i]>price[j]){
//             let tmp = price[i];
//             price[i] = price[j];
//             price[j] = tmp;
//         }
//     }
// }
// console.log("낮은가격수 -->" + price);
// console.groupEnd();

// console.group("8)아래의 코드는 배열의 원소를 반대로 배치하는 소스코드의 일부이다. 빈 칸을 완성하시오. (번호가 같은 박스는 같은 코드가 들어갑니다.)")

// let arr = [5,3,2,8,9]

// console.log('before --> '+ arr);

// for (let i = 0; i < parseInt(arr.length/2); i++){
//     let tmp = arr[i];
//     // 첫번째
//     arr[i] = arr[arr.length - i - 1];
//     // 첫번째 배열에 arr의 마지막 배열을 넣어주기
//     arr[arr.length - i - 1] = tmp;
// }

// console.log('after -->'+ arr);
// console.groupEnd();

