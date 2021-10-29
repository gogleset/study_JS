// for문을 중첩하여 실행하여 아래와 같은 출력 결과를 만드시오.
// 0 1 2 3 
// 1 2 3 4 
// 2 3 4 5 
// 3 4 5 6 
console.group("5번문제");

for(let i = 0; i < 4; i++){
    console.log("%d %d %d %d",i ,i+1, i+2,i+3);
}





console.groupEnd();



// 아래와 같은 출력 결과가 나타나도록 중첩 반복문을 for 문 형식으로 구현하시오.
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
console.group("6번문제")
let str = "";
for(i = 1; i < 8; i++){
    str += i
    console.log("%d",str)
}


// ## 문제 7.

// number라는 변수를 정의하고 1 혹은 2의 값을 임의로 할당하시오. 이 변수에는 1이나 2밖에 저장될 수 없습니다.

// 구구단 프로그램을 만들고자 한다.

// 전체를 출력하는 구구단이 아니라 number가 1일 때는 홀수 단(3, 5, 7, 9), number가 2일 때는 입력하면 짝수 단(2, 4, 6, 8)을 출력하는 프로그램을 완성하시오.
console.group("7번문제")
let number = 1;

if(number % 2 === 0){
    for(let i = 2; i < 10; i++){
        for(let j = 1; j < 10; j++){
            console.log("%d X %d = %d",i,j,i*j)
        }
        i += 1;
    }
} else if (number % 2 === 1){
    for(let i = 3; i < 10; i++){
        for(let j = 1; j < 10; j++){
            console.log("%d X %d = %d",i,j,i*j)
        }
        i += 1;
    }
}
console.groupEnd();
