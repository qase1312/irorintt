var alarm = localStorage.getItem('noticeText');

const message = document.getElementById('message');
  message.textContent = alarm;

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
  window.location.href = 'rule.html';
});


const update = document.getElementById('update');

update.addEventListener('click', () => {
  window.location.href = 'update.html';
});





const imageElement = document.getElementById('image');

const images = ['./image/slide01.jpg', './image/slide02.gif', './image/slide03.jpg']; // 바뀔 이미지 파일명들
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const nextImage = images[currentIndex];

  // 이미지 변경
  imageElement.src = nextImage;
}
changeImage();
// 5초마다 이미지 변경
setInterval(changeImage, 5000);
