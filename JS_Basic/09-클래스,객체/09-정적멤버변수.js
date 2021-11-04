class Customer {
    constructor(name){
        this._name = name;
    }

    // 모든 객체가 공유하는 정적 멤버변수를 정의
    static count = 0; //객체간의 공유해야할 정보는 static 키워드

    // 정적 멤버변수에 대한 관리를 위해서 함수 정의
    in() {
        Customer.count++;
    }

    out() {
        Customer.count--;
    }

    showState(){
        console.log("손님의 이름: " + this._name + ", 전체 손님의 수:" + Customer.count);
    }
}

const c1 = new Customer("손님1"); //객체생성
c1.in(); // Customer 클래스를 받았으니, in안에 있는 customer.count증가 

const c2 = new Customer("손님2");
c2.in();

const c3 = new Customer("손님3");
c3.in();



c1.showState();
c2.showState();
c3.showState();
console.log("-----")


c3.out(); //부모 클래스의 out 함수에 접근
c2.out();



c1.showState();
c2.showState();
c3.showState();


//활용예시: 게시판의 댓글 수, 전체 댓글