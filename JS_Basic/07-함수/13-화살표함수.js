// 간단한 화살표 함수 기본형

// const foo = function(x) {
const foo = (x) => {
    // function 대신 () =>
    for(let i = 0; i < x; i++){
        console.log("helloworld");
    }
};

foo(7);