class Student {
    constructor(kor, eng, math){
        this._kor = kor;
        this._eng = eng;
        this._math = math;
    }
    sum(){
        return this._kor + this._eng + this._math
    }

    avg(){
        return this.sum() / grade.length-1;
    }
}

const grade = [
    ["철수",92,81,76],
    ["영희",72,95,84],
    ["민혁",80,86,98]
];
for (const item of grade){
    const s = new Student(item[1],item[2],item[3]);
    console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", 
    item[0], s.sum(), s.avg().toFixed(0))
}
// // //// /////////////

class Rectangle {
    constructor (){
        this._width = null;
        this._height = null;
    }
    // 

    get width(){ 
        return this._width; 
    }
    // set으로 받고 get으로 뱉어줌
    set width(value){
        this._width = value;
    }

    get height(){ 
        return this._height; 
    }
    // set으로 받고 get으로 뱉어줌
    set height(value){
        this._height = value;
    }
    
    // 실제로 동작하는 부분
    getAround(){
        return this._width * 2 + this.height * 2;
    }
    getArea(){
        return this._width *  this.height; 
    }
}

const rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log("둘레의 길이는 %d이고 넓이가 %d입니다.", rect.getAround(), rect.getArea());



