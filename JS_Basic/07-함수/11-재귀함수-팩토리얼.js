// 재귀함수로 팩토리얼 구하기

function f(x){
    // 첫번째로 예외사항 만들어줌
    if (x <= 1){
        console.log(1);
        return 1;
    } else {
        console.log(x + " x " + "f(" + (x-1) + ")")
        return x * f(x-1);
    }
}

const a = f(5);
console.log(a);
