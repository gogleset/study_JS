class UserClass {
    constructor(){
        this._username = null;
        this._email = null;
    }

    set username(value){
        if(!value){
            console.log("userName을 입력하세요")
            return;
        }
        this._userName = value;
    }
    // 멤버변수 _userName 값을 반환하기 위한 getter함수
    get userName(){
        return this._userName;
    }

    set email(value){
        if(!value){
            console.log("email을 입력하세요");
            return;
        }
        this._email = value;
    }

    get email(){
        return this._email;
    }
    login(){
        if(!this.userName || this.email){
            console.log("userName이나 email을 확인하세요.")
            return;
        }
        console.log("로그인 되었습니다. >> userName=" + this.userName + ",email=" + this.email);
    }
}

const user = new UserClass();
user.login();

// setter를 통한 값의 할당
user.userName = "";
user.email = "";

user.userName = "helloworld";
user.email ="helloworld@gmail.com"
user.login();


