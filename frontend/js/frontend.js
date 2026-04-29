function check_frontEnd(event) {
  event.preventDefault();
  let name = document.querySelector("#name");
  let phone = document.getElementById("phone");
  let part = document.getElementsByName("part");
  let motivation = document.getElementById("motivation");

  let partChecked = '';
  part.forEach(x => {
    if (x.checked) {
      if(x.value === "publishing"){
        partChecked = "웹 퍼블리싱"
      }else if(x.value === "appDev"){
        partChecked = "웹 애플리케이션 개발"
      }else{
        partChecked = "개발 환경 개선"
      }
    }
  })

  let result = '';
  result += "이름: " + name.value + '\n';
  result += "연락처: " + phone.value + '\n';
  result += "지원분야: " + partChecked + '\n';
  result += "지원동기: " + motivation.value + '\n';
  console.log(result);
}