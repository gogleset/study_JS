const point = 72;

// else if를 쓰게 된다면, 순차적으로 조건을 판별하면서 가장 처음 만나는 "참"인 블록을 수행하고 빠져나간다.

if (point > 90){
    console.log("a학점");
} else if (point > 80){
    console.log("b학점");
} else if (point > 70){
    console.log("c학점");
} else if (point > 60){
    console.log("d학점");
} else {
    console.log("f학점");
}
