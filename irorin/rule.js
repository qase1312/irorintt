const test = document.getElementById('test');

test.addEventListener('click', () => {
  window.location.href = 'test.html';
});

const meals = document.getElementById('meals');

meals.addEventListener('click', () => {
  window.location.href = 'meals.html';
});

const weather = document.getElementById('weather');

weather.addEventListener('click', () => {
  window.location.href = 'weather.html';
});

const calendar = document.getElementById('calendar');

calendar.addEventListener('click', () => {
  window.location.href = 'calendar.html';
});

const Finding_way = document.getElementById('Finding_way');

Finding_way.addEventListener('click', () => {
  window.location.href = 'Finding_way.html';
});

const fortune = document.getElementById('fortune');

fortune.addEventListener('click', () => {
  window.location.href = 'fortune.html';
});

const rule = document.getElementById('rule');

rule.addEventListener('click', () => {
  window.location.href = 'index.html';
});


var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var image = document.getElementById('image');

// 버튼 클릭 이벤트 핸들러를 정의합니다.
button1.addEventListener('click', function () {
  // 이미지를 버튼1에 해당하는 이미지로 변경합니다.
  image.src = './image/rule_f/class_rule.svg';
  image.alt = '이미지 1';
});

button2.addEventListener('click', function () {
  // 이미지를 버튼2에 해당하는 이미지로 변경합니다.
  image.src = './image/rule_f/school_rule.svg';
  image.alt = '이미지 2';
});