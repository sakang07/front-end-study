// d_04_fetch.js

/*
  // 기존 data 불러오기 : XMLHttpRequest()
  // http.open(method, url, async);
  // 버튼 클릭시 관련 자료만 모아서 pre요소에 담기

  // 변수 : 
  const http = new XMLHttpRequest();
  const elBtn = document.querySelector('button');
  const elPre = document.querySelector('pre');

  // 기능/함수
  const dataList = function(){
    http.open('GET', '../data/person_card.json', true);
    http.onreadystatechange = function(){
      const state = http.readyState;
      if( state === XMLHttpRequest.DONE ){ // 요청이 끝나면
        const sta = http.status;
        if( sta >=200 && sta < 400 ){ // 200~399 -> 데이터 전송이 성공하면
          // console.log( http.response);
          // return http.response;
          elPre.innerText = http.response;
        }
      }
    }
    http.send();
  };


  // 이벤트 :
  elBtn.addEventListener('click', function(e){
    e.preventDefault();
    dataList();
    // console.log( getData );
  });

*/


// ----------------------------------------------------
const elBtn = document.querySelector('button');
const elPre = document.querySelector('ul');
let url = "../data/person_card.json";

class dataInsert {
  constructor (title, image){
    this.cardTitle = title;
    this.imageUrl = image;
  }
}

const fnGetData = jsonData => {
  const data = jsonData;
  data.forEach( data => {
    let objD = new dataInsert(data.title, data.image);
    const mkLi = document.createElement('li');
    mkLi.innerText = objD.cardTitle;
    elPre.append(mkLi);    
  });
}

// const fnFetch = function(path){
//   fetch(path).then(function (response) {
//     return response.json();
//   }).then(function (data) {
//     // elPre.innerText = JSON.stringify(data);
//     fnGetData(data);
//   });
// };

const fnFetch = path => {
  // 주소값을 받아 json 데이터를 호출하여 then()으로 넘김
  fetch(path)
  // 넘겨받은 data중에서 일부 정제하여(json만) 다음 then()으로 넘김
  .then( response => response.json() )
  // 넘겨받은 data를 fnGetData 함수에 전달
  .then( fnGetData );
};

const fnEvent = e => {
  e.preventDefault();
  fnFetch(url);
};

// 이벤트
// elBtn.addEventListener('click', function(e){
//   e.preventDefault();
//   fnFetch(url);
// });

elBtn.addEventListener('click', fnEvent );