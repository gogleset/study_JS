// 다양한 데이터 타입을 포함하는 복합 자료구조
const company = {
    name: '(주)굿모닝 컴퍼니',
    since: 2013,
    department : ["기획팀","디자인팀","개발팀"]
}

// Json에 접근하는 방법(점으로 연결 혹은 배열처럼 접근)
console.log(company.name);
console.log(company[`since`]);
console.log(company.department[0]);
console.log(company.department[1]);
console.log(company[`department`][2]);