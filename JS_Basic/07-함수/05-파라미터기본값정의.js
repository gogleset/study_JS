// 파라미터 기본 값 정의
// 파라미터 값이 없을 경우 기본값을 정의해서 견고한 코드를 만듬

function bar (x = 1, y = 2){
    console.log("x=" + x + ", y=" + y);
    let result = x + y;
    console.log("result=" + result);
}

bar(100, 200); //x -> 100, y -> 200
bar(500); //x -> 500, y -> 2
bar(); // x -> 1, y -> 2