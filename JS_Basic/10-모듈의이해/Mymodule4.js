// 객체를 모듈화 하기 --> 가장 일반적인 방법
var Helloworld = function(){
    console.log("--- Hello world의 객체가 생성되었습니다.---");
}

Helloworld.prototype.say = function(){
    console.log("Hello world")
}

// 클래스에 대한 객체를 모듈에 추가하기
module.exports  = new Helloworld();