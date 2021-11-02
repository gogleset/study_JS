// 파라미터의 값 범위를 조건문으로 적용, 파라미터의 값 범위에 맞지 않는다면 if문 안에 있는 리턴 값 실행.


function returnBreak(x,y){
    if (x < 10){
        return -1;
    }

    if (y < 10){
        return -2;
    }
    return x + y;
}

// 첫번째 if문에 의해 처리가 중단되고 -1이 반환됨
console.log(returnBreak(1, 100));

// 두번째 if문에 의해 처리가 중단되고 -2가 반환됨
console.log(returnBreak(100,1));

// 정상실행 됨
console.log(returnBreak(100,20));