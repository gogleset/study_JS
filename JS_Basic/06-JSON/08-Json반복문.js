const student = {
    studino: 101011,
    grade: 1,
    name: "학생1",
    phoneno : "010-1231-2342"
}

// JSON 이나 멤버변수를 갖는 객체에 대한 반복문 
for (let key in student){
    // let = ?? 는 key값을 반복시켜줌
    console.group(key);
    console.log(student[key]);
    console.groupEnd();
}