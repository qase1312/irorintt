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
  window.location.href = 'index.html';
});

const rule = document.getElementById('rule');

rule.addEventListener('click', () => {
  window.location.href = 'rule.html';
});

// script.js
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');
const element3 = document.getElementById('element3');
let rotationAngle = 0;

element1.addEventListener('click', () => {
  // 회전 효과 추가
  rotationAngle += 180;
  element1.style.transform = `rotate(${rotationAngle}deg)`;

  // 진동 효과 추가
  element2.style.animation = 'vibrate 0.3s ease infinite';

  // 0.3초 후에 진동 애니메이션 제거
  setTimeout(() => {
    element2.style.animation = '';
  }, 1500);

  // element3 나타나게 하기
  element3.classList.remove('hidden');

  // 3초 후에 element3 숨기기
  setTimeout(() => {
    element3.classList.add('hidden');
  }, 1500);
});

element3.addEventListener('click', () => {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
});

document.getElementById('close-button').addEventListener('click', function () {
  closePopup();
});

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

