const student1 = {
    studino: 10101,
    grade: 1,
    name: "학생1"
}

const student2 = {
    studino: 20202,
    grade: 2,
    name: "학생2"
}

// 목록구조를 갖는 Json 객체
const classRoom = {
    student: [student1, student2]
}

console.log(classRoom);

// 배열의 기본 특성을 활용하여 반복문으로 접근할 수 있다.
for (i = 0; i < classRoom.student.length; i++) {
    console.group("%d번째 학생",i+1);
    console.log(">>학번: " + classRoom.student[i].studino);
    console.log(">>학년: " + classRoom.student[i].grade);
    console.log(">>이름: " + classRoom.student[i].name);
}