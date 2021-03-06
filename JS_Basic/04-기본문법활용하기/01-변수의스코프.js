// 1) var 키워드로 생성한 변수의 스코프
// 조건문이 실행되지 않는 경우
if (false){
    var num1 = 100;
    console.log("블록안" +num1);
}

// if문의 실행 여부에 따라 num1이 선언되므로
// if문의 실행 여부에 따라 num1의 식별 가능 여부가 결정됨
// num1을 식별하지 못한 경우 정의되지 않은 값(undefined)가 된다.
console.log("블록 밖: " + num1);

// 조건문이 실행되는 경우
if (true){
    var num2 = 100;
    console.log = ("블록 안:" +num2);
}

console.log("블록 밖:" + num2);

// 2) let 키워드로 생성한 변수의 스코프
let num3 = 100;

if (true){
    // 블록 밖에서 생성된 변수를 블록 안에서 사용 가능
    let num4 =  num3 + 100;
    console.log("블록 안:" + num4);
}

// let으로 선언된 변수는 if 문의 실행 여부와 상관없이 블록을 빠져나올 수 없다.
// -> 프로그램 에러
console.log("블록 밖:" + num4);

// 3) for문의 초기식을 var로 선언한 경우
for (var i = 0; i < 10; i++){
    console.log("반복문 안:" + i);
}
console.log("반복문 밖>>>" + i);

// 4) for문의 초기식을 let으로 선언한 경우
for (let j = 0; j < 10; j++){
    console.log("반복문 안:::" + j);
}
// for문의 초기식도 {}에 속한 것으로 보기 때문에 j 값은 블록을 빠져 나올 수 없다.
console.log("반복문 밖>>>" + j);

// 5) 선언되지 않은 변수
// let 키워드는 반드시 선언 -> 할당의 순서로만 사용 가능함.
x = 100;
let x;
console.log(x);

// var 키워드는 할당 후 선언이 가능함.
y = 200;
var y;
console.log(y);