// 함수 연습문제

// ## 문제1.

// 아래의 형태로 출력하는 재귀함수를 구현하시오.

// ```js
// // max는 출력해야 할 최대 라인 수
// // current는 현재 출력중인 라인의 위치

// let str = "";
// function printStar(max, current=1) {
    
//     // max는 출력해야 할 최대 라인 수
//     // current는 현재 출력중인 라인의 위치
//     if (max < current){
//         // 맥스보다 커런트가 높을 때
//         return 
//     } else {
//         console.log(str += "*")
//         printStar(max, current+1)
//         // for (let i = 0; i < current; i++) {
//             // str += "*"
//         // }

//     }
// }
// printStar(7)
// ```

// #### 출력결과

// ```
// *
// **
// ***
// ****
// *****
// ```

// ## 문제2.

// 1번 문제를 응용하여 같은 파라미터를 받았을 때 별을 역으로 출력하는 `printRevStar(max, current=1)` 을 구현하시오.

function printStar(max, current=1) {
    if (max < current) {
        return 
    } else {
        // 맥스의 갯수만큼 별 출력
        let str = "";

        for(let i = 0; i < max - current+1; i++) {
            str += "*";
        }
        console.log(str);
        printStar(max, current+1);
        // 처음부터 맥스의 별을 출력해서 한단계씩 내려와야함
    }
}

printStar(3);

// #### 출력결과

// ```
// *****
// ****
// ***
// **
// *
// ```
// ## 문제3

// 369게임은 숫자를 순서대로 말하면서 3,6,9가 포함된 횟수만큼 박수를 치는 게임이다.

// 1부터 파라미터로 전달된 숫자까지 반복하면서 박수를 칠 조건이 충족되면 3,6,9 게임 규칙에 따라 박수를 의미하는 "짝"을 출력하고 그렇지 않은 경우에는 숫자를 출력하고, 박수를 총 몇번 쳤는지를 리턴하는 함수 `myGame(n)`을 작성하시오.


function myGame(number){
    // console.log(a[1])
    let clap = 0;
    for (let i = 1; i < number+1; i++){
        let a = String(i);
        // console.log(a[0]);
        if (a[0] === "3","6","9" || a[1] === "3"){

        //     clap++
        //     console.log("짝 ==> %d번", clap)
        //     clap = 0;
        // } else if (a[0] === "6" || a[1] === "6"){
        //     clap++
        //     console.log("짝 ==> %d번", clap)
        //     clap = 0;
        // }else if (a[0] === "9" || a[1] === "9") {
        //     clap++
        //     console.log("짝 ==> %d번", clap)
        //     clap = 0;
        } else {
            console.log(a);
        }
    }
};


myGame(33);

// #### 출력예시

// myGame(35)를 호출한 경우

// ```
// 1
// 2
// 짝(3) --> 1번
// 4
// 5
// 짝(6) --> 1번
// 7
// 8
// 짝(9) --> 1번
// 10
// 11
// 12
// 짝(13) --> 1번
// 14
// 15
// ...
// 29
// 짝(30) --> 1번
// 짝(31) --> 1번
// 짝(32) --> 1번
// 짝짝(33) --> 2번
// 짝(34) --> 1번
// 짝(35) --> 1번

// 박수를 총 OO번 쳤습니다.
// ...

// ```