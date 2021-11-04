class Terran {
    // 모든 객체가 가지고 있는 명사적 특성들을 멤버변수로 정의
    constructor(name, hp, dps){
        this._name = name;//이름
        this._hp = hp;//체력
        this._dps = dps;//damage per seconds
        
        console.log("[%s] 체력: %d, 공격력: %d", name, hp, dps);
    }
    attack(target){
        console.log(this._name + "(이)가" + target + "을(를)공격합니다. 데미지:" + this._dps);
    }
}   

class Marine extends Terran{
    attack(target){
        console.log(this._name + "(이)가" + target + "에게 사격합니다. 데미지: " + this._dps);
    }
}

class Tank extends Terran{
    // 테란의 기능을 상속받는 자식 클래스
    attack(target){
        super.attack(target);
        console.log(">>> 탱크 포격");
    }
    // 기능의 확장
}

class Firebet extends Terran{
    constructor(name){
        // 클래스 상속 관계에서 부모의 생성자는 무조건 호출되어야 하므로,
        // 자식이 생성자를 갖는 경우 그 안에서 부모의 생성자를 강제 호출 해야한다.
        super(name, 500, 50);
    }
}

const m = new Marine("해병1", 120, 30);
// 자식 클래스의 의해 재 정의된 기능 호출 --> 부모의 메서드는 가려진다.
m.attack("질럿");


const t = new Tank("탱크1", 120, 30);
t.attack("드라군");

const f = new Firebet('화염방사병');
f.attack("적")