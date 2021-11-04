// setInterval(func, int)

/*
- 지정된 함수를 두 번째 인자로 전달된 시간마다 한 번씩 호출한다.(타이머기능)
- setInterval()이후의 처리 로직들은 func의 실행여부와 상관없이 즉시 실행된다.

- 타이머를 종료시킬 수 있는 timerid를 반환한다.

- 이 값을 clearInterval() 함수에 전달하면 타이머가 종료된다.

- int는 밀리세컨드(1/1000)초를 의미하는 정수
*/

let count1 = 0;

const timeId = setInterval(() =>{
    count1++;
    console.log("[타이머]" + count1 + "번째 자동실행");

    if (count1 == 5){
        console.log("타이머1 종료")
        clearInterval(timeId); // 타이머 종료를 나타내는 구문(따로 구현해주어야한다.)
    }
},3000); //3초마다 실행

console.log("타이머1 시작");

let count2 = 0;

const timeId2 = setInterval(() =>{
    count2++;
    console.log("[타이머]" + count2 + "번째 자동실행");

    if(count2 == 10){
        console.log("타이머 종료");
        clearInterval(timeId2);
    }
}, 1000); //1초마다 실행

console.log("타이머2 시작")

// setTimeout과 setInterval의 (int)차이는 setTimeout은 몇초 "후"에 실행, setInterval은 몇초"마다" 실행의 차이가 있다.