console.group("1. for문을 사용하여 0부터 10 미만의 정수 중에서 홀수만을 큰 수부터 출력하시오.");
for (let i = 10; i > 0; i--) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
console.groupEnd();

console.group("2. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰 수부터 출력하시오.");
let x = 10;
while (x >= 0){
    if(x % 2 === 1){
        console.log(x);
    }
    --x;
}
console.groupEnd();

console.group("3. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.");
let y = 0;
for(let i = 0; i < 20; i++){
    if(i % 2 === 0 || i % 3 === 0){
        y += i;
    }
}
console.log(y);
console.groupEnd();

console.group("4. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하고 경우의 수는 총 몇가지 인지를 아래와 같이 출력하는 코드를 작성하시오.")
let z = 0;
let k = 0;

for (let i = 1; i < 7; i++){
    for(let j = 6; j > 0; j--){
        z = i + j
        if (z === 6){
            console.log("[%d, %d]",i,j)
            k += 1
        }
    }
}
console.log("경우의 수는 %d다." ,k)


console.groupEnd();

