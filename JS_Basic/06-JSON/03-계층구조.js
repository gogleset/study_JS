// 1) 다른 Json 객체를 Value로 포함하는 경우

// 단일 형태의 Json
let centerPoint = {
    x : 5, //x좌표
    y : 10 //y좌표
};

// 다른 Json을 포함하는 Json
let circle1 = {
    center: centerPoint, //중심의 좌표
    radius: 5.10 //반지름
}

console.log("circle1");
console.log("원의 중점: (%d, %d)", circle1.center.x, circle1.center.y);
console.log("원의 반지름: (%d)", circle1.radius);
