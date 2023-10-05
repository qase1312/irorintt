var v_list = ["행운 1단계", "행운 2단계", "행운 3단계", "행운 4단계", "행운 5단계"];
var i_list = ["오늘은 모든것을 조심해야 할거야..", "길가다가 넘어질수도 있어 !!", "아무일도 일어나지 않는것은 행운이야", "동전을 주울수도! 바닥을 잘보자!", "오늘은 모든 문제 찍어도 만점 !"];

function updateLabel_v(text1) {
  var label = document.getElementById("lucky_v");
  label.textContent = text1;
}

function updateLabel_i(text2) {
  var label = document.getElementById("lucky_i");
  label.textContent = text2;
}

document.getElementById("element3").addEventListener("click", function () {
  var randomIndex = Math.floor(Math.random() * v_list.length);
  var randomText1 = v_list[randomIndex];
  var randomText2 = i_list[randomIndex];
  updateLabel_v(randomText1);
  updateLabel_i(randomText2);
});
