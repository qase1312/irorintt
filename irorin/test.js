const test = document.getElementById('test');

test.addEventListener('click', () => {
  window.location.href = 'index.html';
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

var evaluations = JSON.parse(localStorage.getItem("evaluations")) || [];
var listElement = document.getElementById("evaluationList");

function displayEvaluations() {
  listElement.innerHTML = "";

  for (var i = 0; i < evaluations.length; i++) {
    var evaluation = evaluations[i];
    var listItem = document.createElement("li");
    listItem.textContent = `월: ${evaluation.month}, 일: ${evaluation.day}, 과목: ${evaluation.subject}, 내용: ${evaluation.evaluation}`;
    listElement.appendChild(listItem);
  }
}

// 초기화 시 저장된 정보 표시
displayEvaluations();