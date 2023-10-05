const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  // 사용자 이름과 비밀번호를 확인하여 로그인 시도를 시뮬레이트합니다.
  const user = users.find((user) => user.username === username && user.password === password);

  if (username === "ckgksfk" && password === "chlrh") {
    // 로그인 성공
    // 로그인 성공 시 페이지를 넘김 (manager.html로 이동)
    window.location.href = 'index.html'; // 이동하고 싶은 페이지의 URL을 여기에 입력하세요
  }
  else {
    // 로그인 실패
    alert('로그인 실패. 아이디 또는 비밀번호가 일치하지 않습니다.');
  }
});