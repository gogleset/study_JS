// 함수를 정의하고 호출하기

// 함수는 변수와 동급이다.

// 함수 정의하기
function sayhello(){
    // 두 개의 출력 명령은 내장함.
    console.log("Hello Javascript!");
    console.log("안녕하세요 자바스크립트")
}

// 함수 호출하기
sayhello();

// 정의된 함수는 재사용 여러번 가능함
for (let i = 0; i < 5; i++){
    sayhello();
}