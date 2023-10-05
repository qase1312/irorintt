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
  window.location.href = 'index.html';
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

const apiKey = '7f428afc723a4700801b30ed8a0fe369';

// 날씨 정보를 업데이트하는 함수 정의
function updateWeather() {
  const info1 = document.getElementById("info1");
  const info2 = document.getElementById("info2");
  const info3 = document.getElementById("info3");
  const info4 = document.getElementById("info4");
  const info5 = document.getElementById("info5");
  const info6 = document.getElementById("info6");
  const info7 = document.getElementById("info7");
  const info8 = document.getElementById("info8");
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Pyeongtaek,KR&appid=${apiKey}&units=metric`;

  // 요청 보내기
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // API 응답을 처리합니다.
      const weatherDiv = document.getElementById('weather');
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const cityName = data.name;
      const country = data.sys.country;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const maxTemperature = data.main.temp_max;
      const minTemperature = data.main.temp_min;
      const now = new Date();
      const hours = (now.getHours() + 1).toString().padStart(2, '0');
      const minutes = (now.getMinutes() + 1).toString().padStart(2, '0');
      const seconds = (now.getSeconds() + 1).toString().padStart(2, '0');

      // 날씨 정보를 화면에 출력합니다.
      info1.textContent = `평택시`;
      info2.textContent = `${temperature}°C`;
      info3.textContent = `${description}`;
      info4.textContent = `${humidity}%`;
      info5.textContent = `${windSpeed} m/s`;
      info6.textContent = `${maxTemperature}°C`;
      info7.textContent = `${minTemperature}°C`;
      info8.textContent = `${hours} : ${minutes} : ${seconds}`;
    })
    .catch(error => {
      console.error('날씨 정보를 가져오는 중 오류 발생:', error);
    });
}

// 초기 정보를 가져오고 주기적으로 업데이트
updateWeather();
setInterval(updateWeather, 1000); // 30분(1800000 밀리초)마다 업데이트