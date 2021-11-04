// 1)클래스 형식의 모듈 참조
var myModule3 = require('./Mymodule3')

// 리턴된 모듈은 클래스 형식이므로,
// 기능의 사용을 위해선 인스턴스를 생성해야함
var module_obj = new myModule3();
module_obj.say();

//2) 객체 형태의 모듈참조

var myModule4 = require('./Mymodule4');

// 리턴된 모듈은 객체 형태이므로,
// 직접 모듈 내의 기능을 호출 할 수 있다.
myModule4.say();