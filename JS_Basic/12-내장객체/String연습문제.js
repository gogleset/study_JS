// String 연습문제
// -------

// ## 문제1.

// 자신의 이메일 주소를 `email` 이라는 변수에 저장하고 `@`를 기준으로 아이디와 도메인 부분을 분리하여 출력하시오.





let email = "choij2494@gmail.com"

// if (email.indexOf("@")){
//     console.log(email.substring(0, email.indexOf("@")));
//     console.log(email.substring(email.indexOf("@") + 1, email.length));
// }

p = email.indexOf("@");
id = email.substring(0, p);
domain = email.substring(p+1);

console.log(id);
console.log(domain);



// ### 출력결과

// 이메일이 leekh4232@gmail.com 인 경우

// ```
// leekh4232
// gmail.com
// ```


// ## 문제2.

// 임의의 주민번호를 다음과 같이 `*`을 포함하여 변수에 저장하시오.

// ```
ssn = '971130-1******'
// ```
now = 2021;

yy = parseInt(ssn.substring(0,2));
mm = parseInt(ssn.substring(2,4));
dd = parseInt(ssn.substring(4,6));
gen = parseInt(ssn.substring(7,8));

yy = (gen > 2) ? yy + 2000 : yy + 1900;
age = now - yy + 1;
sex = (gen % 2) ? "남자" : "여자"

console.log("%d년 %d월 %d일에 태어난 %d세 %s 입니다.", yy, mm, dd, age, sex);

// 이 값을 사용하여 생년월일, 나이, 성별을 출력하시오.
// for(let i = 0; i < ssn.length; i++) {
//     if(i < 2){
//         birth += ssn[i];
//         console.log(birth);
//         month += ssn[i+2];
//         console.log(month);
//         day += ssn[i+4];
//         console.log(day);
//         male += ssn[i+7];
//         console.log(male);
//     } 
// }




// #### 출력결과

// ```
// 2002년 5월 17일에 태어난 20세 남자 입니다.
// ```


// ## 문제3.

// 아래의 문장에서 "수업시간"이라는 단어가 총 몇 번 등장하는지 카운트 하는 프로그램을 구현하시오.

// ```
str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."
// // ```

let word = "수업시간"
flen = word.length;
find = true;
count = 0;

while (find){
    console.log(str);
    p = str.indexOf(word);
    find = p > -1;

    if(find){
        count++;
        str = str.substring(p+flen);
    }
}

console.log(count);


// #### 출력결과

// ```
// 3
// ```