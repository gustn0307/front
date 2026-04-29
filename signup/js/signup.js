//<!-- javascript 코드를 넣는 태그 -->

// alert("짠~~~")
// console.log("자바스크립트에요~~~")

// 함수를 생성해보기
function check_sign(event){
  // 자바스크립트에서 변수선언 타입
  // var : 최근엔 사용하지 않음
  // const : 상수
  // let : 변수
  // alert("가입 단추 눌림")
  // 문장 뒤에 ;을 붙여도 되고 안 붙여도 되지만 구분을 위해 붙이는 것이 좋다.

  // 각 입력 상자를 변수로 선언
  // HTML 태그가 가지는 브라우저의 기본 동작을 막고 
  // JavaScript로 직접 정의한 동작을 실행하기 위해 사용
  event.preventDefault(); 
  let userId = document.querySelector("#uid");
  let email = document.querySelector("#email");
  let pwd = document.querySelector("#pwd");
  let confirm = document.querySelector("#confirm");
  let path = document.querySelector("#path");
  let memo = document.querySelector("#memo");
  let mail = document.getElementsByName("mail");  // 라디오 버튼
  let bus = document.getElementById("bus");
  let metro = document.getElementById("metro");
  let walking = document.getElementById("walking");

  // 버스가 체크 되었는지 확인
  if (bus.checked) {
    bus.value = "OK";
  } else{
    bus.value = "NO";
  }
  metro.value = metro.checked ? "OK" : "NO";
  walking.value = walking.checked ? "OK" : "NO";

  // 이메일 수신 여부 확인
  let mailReceive = '';

  // 값 비교: ==
  // 값과 타입 비교: ===
  mail.forEach(x => {
    if(x.checked){
      mailReceive = x.value === 'yes' ? '메일수신' : '메일 수신 안 함';
    }
  });

  // 아이디 글자 수 확인
  // input 상자: uid에서 입력한 글자의 수를 저장
  let idLength = userId.value.length;
  if(idLength < 4 || idLength > 10){
    alert("아이디는 4자~10자 사이입니다.");
    userId.focus();
  }

  // 비밀번호 확인
  if(pwd.value !== confirm.value){
    alert("비밀번호와 비밀번호 확인이 일치하지 않음");
    confirm.value = '';
    confirm.focus();
  }

  let result = '';
  result = result + '아이디: ' + userId.value + '\n';
  result = result + '이메일: ' + email.value + '\n';
  result = result + '비밀번호: ' + pwd.value + '\n';
  result = result + '가입경로: ' + path.value + '\n';
  result = result + '메모: ' + memo.value + '\n';
  result = result + '메일수신여부: ' + mailReceive + '\n';
  result = result + '버스: ' + bus.value + '\n';
  result = result + '지하철: ' + metro.value + '\n';
  result = result + '도보: ' + walking.value + '\n';
  console.log(result);
}