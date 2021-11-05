// 랜덤값 생성 연습문제

// 6개의 원소를 갖는 빈 배열을 생성하고,
// 배열의 각 칸에 1~64 사이의 랜덤 숫자를 생성해 넣으시오.
let a = "";
function random(n1, n2){
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}
// 랜덤한 숫자를 입력하면 상수로 뱉어주는 함수
const lotto = new Array(6);



for (let i = 0; i < lotto.length; i++) {
    while(true) {
        // 랜덤한 숫자
        const rnd = random(1,6);
        console.log("%d번째에 저장될 값 ::: %d",i, rnd);

        // 같은 값이 있는지 검사한 결과
        let find = false;

        for(let j = 0; j < i; j++){
            if(rnd == lotto[j]){
                console.log(">>중복된 값 찾음")
                find = true;
                break;
            }
        }
        // 중복된 값을 찾지 못했다면
        if(!find){
            // i번째 원소로 rnd값을 확정하고 무한루프 종료
            console.log("%d번째 원소로 확정된 값")
            lotto[i] = rnd;
            break;
        }
    }
}

console.log(lotto);



// 단, 각 원소 값은 서로 중복될 수 없습니다