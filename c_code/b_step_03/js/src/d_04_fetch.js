"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.promise.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var elBtn = document.querySelector('button');
var elPre = document.querySelector('ul');
var url = "../data/person_card.json";

var dataInsert = function dataInsert(title, image) {
  _classCallCheck(this, dataInsert);

  this.cardTitle = title;
  this.imageUrl = image;
};

var fnGetData = function fnGetData(jsonData) {
  var data = jsonData;
  data.forEach(function (data) {
    var objD = new dataInsert(data.title, data.image);
    var mkLi = document.createElement('li');
    mkLi.innerText = objD.cardTitle;
    elPre.append(mkLi);
  });
}; // const fnFetch = function(path){
//   fetch(path).then(function (response) {
//     return response.json();
//   }).then(function (data) {
//     // elPre.innerText = JSON.stringify(data);
//     fnGetData(data);
//   });
// };


var fnFetch = function fnFetch(path) {
  // 주소값을 받아 json 데이터를 호출하여 then()으로 넘김
  fetch(path) // 넘겨받은 data중에서 일부 정제하여(json만) 다음 then()으로 넘김
  .then(function (response) {
    return response.json();
  }) // 넘겨받은 data를 fnGetData 함수에 전달
  .then(fnGetData);
};

var fnEvent = function fnEvent(e) {
  e.preventDefault();
  fnFetch(url);
}; // 이벤트
// elBtn.addEventListener('click', function(e){
//   e.preventDefault();
//   fnFetch(url);
// });


elBtn.addEventListener('click', fnEvent);