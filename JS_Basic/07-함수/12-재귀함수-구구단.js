// 재귀함수로 구구단 만들기

function gugu(level, depth = 1){
    // 만약 depth가 9보다 커진다면 리턴
    if (depth > 9 ){
        return;
    } else {
        console.log(level + "x" + depth + "=" + (level * depth)); 
        // 구구단이 출력되는 코드
        gugu(level, depth+1);
        // 재귀 (다시 호출).
    }
}

gugu(5);