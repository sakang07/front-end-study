// b_05_condition.js

// switch (){} : switch문의 기본 형태
/*
switch (매개변수){
  case 조건값:
    조건값과 매개변수가 일치하면 수행
  break; // break는 더이상 해당 조건을 수행하지 않고 switch문을 종료한다
  case 조건값2:
    조건값과 매개변수가 일치하면 수행
  break;
  default:
    위 조건들이 일치하지 않으면 수행
}*/

var rel = true;
var d = [];

switch (rel) {
  case true:
    d.push('true 1');
    break;
  case false:
    d.push('false 1');
    break;
  default:
    d.push('end');
}

console.log(d);

var num = 4;
var data = [];

// 함수와 switch문의 중첩
var atmFn = function (num) {
  switch (num) {
    case 1:
      data.push('현금 입금');
      atmFn(2);   // 재귀함수 : 자기 자신을 내부에 다시 호출해서 사용할 수 있다
      break;
    case 2:
      data.push('통장 확인');
      break;
    case 3:
      data.push('타계좌 송금');
      atmFn(2);
      break;
    case 4:
      data.push('통장 삭제');
      atmFn(2);
      break;
    default:
      data.push('대출(연 60%)');
      atmFn(2);
  }
};
atmFn(1);
console.log(data);

// ---------------------------------------------
console.clear();

//a: 편의점에서 물건을 살경우
// 1. 물건을 고른다.
// 2. 카드를 낸다.
// 3. 카드 결재를한다.
// 4. 물건과, 카드를 돌려받는다.
// 5. 내역을 확인한다.

//b: 편의점에서 공병을 팔경우
// 1. 물건을 낸다
// 2. 카드를 낸다.
// 3. 카드 입급을 받는다.
// 4. 카드를 돌려받는다.
// 5. 내역을 확인한다.

//c: 편의점에서 물건을 환불
// 1. 물건을 건넨다.
// 2. 카드를 낸다.
// 3. 카드 입금을 받는다(취소)
// 4. 카드를 돌려받는다
// 5. 내역을 확인한다.

//d: 편의점 결재가 안될때
// 1. 물건을 고른다.
// 2. 카드를 낸다.
// 3. 결재 에러발생
// 4. 카드 돌려받는다.
// 5. 내역을 확인한다.

var storeList = [];
var i = 0;
// ------------------------------------------

var setFn = function (selector) {
  var userStep = [];
  var storeSelectFn = function (selector) {
    switch (selector) {
      case 'a': // 물건을 살경우
        storeSelectFn('send');
        userStep.push('3. 카드 결재를한다.');
        storeSelectFn('return');
        break;
      case 'b': // 공병을 팔경우 
        storeSelectFn('send');
        userStep.push('3. 카드 입급을 받는다.');
        storeSelectFn('return');
        break;
      case 'c': // 환불
        storeSelectFn('send');
        userStep.push('3. 카드 입금을 받는다(취소처리).');
        storeSelectFn('return');
        break;
      case 'd': // 결재가 안될때
        storeSelectFn('send');
        userStep.push('3. 결재 에러발생');
        storeSelectFn('return');
        break;
      case 'send':
        userStep.push('1. 물건을 건넨다.', '2. 카드를 낸다.');
        break;
      case 'return':
        userStep.push('4. 카드를(물건이 있다면 물건과 함께) 돌려받는다.', '5. 내역을 확인한다.');
        break;
      default:
        userStep.push('사용기록 없슴.');
    }
    return userStep;
  };
  storeSelectFn(selector);
  // console.log(userStep);
  return userStep;
}; // setFn();

// ------------------------------------------
var storeFn = function (selector, user) {
  var userCheck = {}; //{name:'사용자', content: []};
  var userStep = [];
  // ------------------------------
  userStep = setFn(selector);
  // ------------------------------
  i += 1;
  userCheck.name = user || 'noNameUser_' + i;
  userCheck.content = userStep;
  storeList.push(userCheck);
  return userCheck;
};// storeFn();
// ------------------------------------------
console.log(storeFn('a'));
console.log(storeFn('b', 'user2'));
// console.log(storeFn('c'));
// console.log(storeFn('d', 'user4'));
console.log(storeList);


// 기능을 원하는 것을 먼저 작성
// 수행되는 순서대로, 큰 틀내용대로 작성
// 세부 내용이 어떻게 처리할지, 기능위주로 들어가는것은 별첨으로 따로 작성

// 주요 목적 - 편의점에서 할수 있는 일 (물건 구매/판매/환불시 수행되는 작용 처리)
// 하나의 조건기준(다른 조건이들어가면 그에따른 첨부)
// 1. 큰 수행 순서
// 2. 큰 수행 순서
  // 2-1. 중간 작업수행
  // 2-2. 중간 작업수행  * 별도함수처리(setFn기능 별첨)
  // 2-3. 중간 작업수행
// 3. 큰 수행 순서
// 4. 큰 수행 순서
// 5. 큰 수행 순서
// 6. 큰 수행 순서

// *별첨 1 : setFn기능
// *별첨 2 : setFn기능

// -------------------------------------------

// 코드 작성하는 요령
// 1. 내용 로직
// 2. 변수
// 3. 함수(함수 호출시, 내부에서 다른 함수를 호출하기 위해서는 해당 함수가 먼저 작성되어야 한다)
      // var cFn = function(){}
      // var bFn = function(){cFn();}
      // var aFn = function(){bFn();}

// 4. 결과 도출을 위한 행동

