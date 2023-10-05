function updateCurrentDate() {
  const currentMonthElement = document.getElementById("current-month");
  const currentDayElement = document.getElementById("current-day");
  const now = new Date();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');

  currentMonthElement.textContent = month;
  currentDayElement.textContent = day;
}

// 초기 날짜 표시
updateCurrentDate();

// 월과 일 업데이트
setInterval(updateCurrentDate, 1000);
