// 종족의 공통 특성을 갖는 클래스

class Protoss {
    // 모든 객체가 가지고 있는 명사적 특성들을 멤버변수로 정의
    constructor(name, hp, dps){
        this._name = name;//이름
        this._hp = hp;//체력
        this._dps = dps;//damage per seconds
        
        console.log("[%s] 체력: %d, 공격력: %d", name, hp, dps);
    }

    move(position){
        console.log(this._name + "(이)가" + position + "까지 이동합니다.");
    }
    
    attack(target){
        console.log(this._name + "(이)가" + target + "을(를)공격합니다. 데미지:" + this._dps);
    }
}

class Dragoon extends Protoss {
    // extends를 사용하면 상속 가능하고 자식 클래스는 
    fire(target){
        this.attack(target);
        console.log("~~~~~~~~~~~~~~~~~~~~~ 원거리 공격")
    }
}

class Zealot extends Protoss{
    sword(target){
        this.attack(target);
        console.log(">>>>>>검으로 찌르기")
    }
}

const z1 = new Zealot("질럿", 300, 20);
z1.move("본진");
z1.sword("본진");


const z2 = new Zealot("질럿2", 300, 25);
z2.move("멀티");
z2.sword("멀티");


const d1 = new Dragoon("드라군1", 250,40);
d1.move("본진");
d1.fire("본진");


const d2 = new Dragoon("드라군", 200,35);
d2.move("멀티");
d2.fire("멀티");
