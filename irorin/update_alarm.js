document.addEventListener("DOMContentLoaded", function () {
  const noticeText = document.getElementById("noticeText");
  const submitBtn = document.getElementById("submitBtn");
  const goBackBtn = document.getElementById("goBackBtn");

  submitBtn.addEventListener("click", function () {
    const text = noticeText.value;
    localStorage.setItem("noticeText", text);
    alert("데이터가 변경되었습니다.");
  });

  goBackBtn.addEventListener("click", function () {
    window.history.back();
  });
});
