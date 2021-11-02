// 처리 로직이 한 줄로만 존재하는 경우

// 파라미터 x,y를 받아서 x+y를 리턴하는 arrowReturn이라는 함수

// const arrowReturn = (x, y) => {
    // return x*y;
// }

const arrowReturn = (x, y) => x+y;
// 대괄호 return 생략.(결과값이 단순한 경우)

console.log(arrowReturn(100, 400));