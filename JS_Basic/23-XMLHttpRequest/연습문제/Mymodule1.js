class Calling {
    do_query = null;
    web_data = null;
    cafe_data = null;
    blog_data = null;

  call = (data, do_query) => {
    const xhr = new XMLHttpRequest(); //Ajax의 기능을 수행하는 통신 "객체"
    const method = "GET"; // 백엔드에 접속하는 방식(GET, POST, PUT, DELETE)
    const url =
      "https://dapi.kakao.com/v2/search/" +
      data +
      "?query=" +
      do_query +
      "&page=1&size=20"; //접속할 위치

    xhr.onreadystatechange = (e) => {
      //Ajax 통신객체를 받은 객체 xhr이 readyState객체의 프로퍼티 값이 변할때 마다 호출
      const { target } = e; //구조분해 문법 -> e라는 객체에 target을 불러옴
      console.log(target); //XMLHttpRequest 객체의 값을 불러옴

      // target.readyState값이 XMLHttpRequest.DONE과 같다면
      // target.readyState값이 XMLHttpRequest.DONE과 같다면
      if (target.readyState == XMLHttpRequest.DONE) {
        // target.statusText값이 "OK"라면
        if (target.status == 200) {
          const req = JSON.parse(target.response);
          // typeofdata = req.documents;
          console.log(data);
          if (data == "web") {
            this.web_data = req.documents;
            this.printData("web");
          } else if (data == "cafe") {
            this.cafe_data = req.documents;
            this.printData("cafe");
          } else if (data == "blog") {
            this.blog_data = req.documents;
            this.printData("blog");
          }
        } else {
          //서버와 연결이 안됐을 경우
          // s = target.status 와 100을 나눈 몫을 정수화
          const s = parseInt(target.status / 100);
          // 알림메세지가 담길 변수 errMsg
          let errMsg = "null";
          // s 가 4로 나누어 진다면
          if (s == 4) {
            errMsg = `[${target.status}]${target.statusText}- 요청 주소가 잘못되었습니다.`;
          } else if (s == 5) {
            errMsg = `[${target.status}]${target.statusText}- 서버의 응답이 없습니다.`;
          } else {
            errMsg = `[${target.status}]${target.statusText}- 요청에 실패했습니다.`;
          }
          // 알림메세지 출력
          alert(errMsg);
        }
      }
    };
    xhr.open(method, url);

    xhr.setRequestHeader(
      "Authorization",
      "KakaoAK c193e640c6f5851ca31109d7bd403779"
    );

    // xhr객체가 요청을 백엔드에 전송
    xhr.send();
  };

  printData = (data) => {
    // 받아오는 데이터타입의 정보
    let typeofdata = null;
    const list = document.querySelector("#list");
    // 초기화
    Array.from(list.getElementsByTagName("li")).map((v, i) => {
        list.removeChild(v);
    })


    if (data == "web") {
        typeofdata = this.web_data;
    } else if (data == "cafe") {
        typeofdata = this.cafe_data;
    } else if (data == "blog") {
        typeofdata = this.blog_data;
    }


    typeofdata.map((v, i) => {
        console.log(v);

        const li = document.createElement("li");

        const a = document.createElement("a");
        a.setAttribute("target","_blank");
        a.setAttribute("href", v.url);
        a.innerHTML = "제목: " + v.title

        const p = document.createElement("p");
        p.innerHTML = "설명: " + v.contents;


        li.appendChild(a);
        a.appendChild(p);

        list.appendChild(li);
    });

}
}
