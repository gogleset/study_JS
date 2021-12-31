// 멤버변수를 갖는 생성자를 통해서 객체 만들기

function User(){
    // 멤버변수 정의하기
    // 일반적으로 멤버변수는 일반 변수와 구분하기 위해 언더바로 시작하는 이름을 갖는다.
    this._id = null;
    this._email = null;
}

// 생성자를 통한 객체 만들기
const foo = new User();
// 객체를 할당
foo._id = "hello";
foo._email = "hello@javascript.com";
// this.에 foo를 할당함
console.log(foo);


const bar = new User();
bar._id = "world";
bar._email = "bar@javascript.com";
bar._new = "new obj"
console.log(bar);

// 생성자 함수는 객체를 만들기 위한 함수, new 키워드를 써서 만들고, this를 통해 프로퍼티를 만든다.
// 같은 자료구조를 가진 객체를 여러개 받을 수 있고, 이것은 개별적으로 동작한다.(게임의 유닛)