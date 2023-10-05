function updateTimeTable() {
  var storedData = localStorage.getItem('myTimeTable');
  var TimeTable = JSON.parse(storedData);


  //1,1
  const B11 = document.getElementById('B11');
  B11.textContent = TimeTable[0][0].name;

  B11.addEventListener('click', () => {
    window.location.href = `${TimeTable[0][0].page}.html`;
  });

  //1,2
  const B12 = document.getElementById('B12');
  B12.textContent = TimeTable[0][1].name;

  B12.addEventListener('click', () => {
    window.location.href = `${TimeTable[0][1].page}.html`;
  });

  //1,3
  const B13 = document.getElementById('B13');
  B13.textContent = TimeTable[0][2].name;

  B13.addEventListener('click', () => {
    window.location.href = `${TimeTable[0][2].page}.html`;
  });

  //1,4
  const B14 = document.getElementById('B14');
  B14.textContent = TimeTable[0][3].name;

  B14.addEventListener('click', () => {
    window.location.href = `${TimeTable[0][3].page}.html`;
  });

  //1,5
  const B15 = document.getElementById('B15');
  B15.textContent = TimeTable[0][4].name;

  B15.addEventListener('click', () => {
    window.location.href = `${TimeTable[0][4].page}.html`;
  });

  //2,1
  const B21 = document.getElementById('B21');
  B21.textContent = TimeTable[1][0].name;

  B21.addEventListener('click', () => {
    window.location.href = `${TimeTable[1][0].page}.html`;
  });

  //2,2
  const B22 = document.getElementById('B22');
  B22.textContent = TimeTable[1][1].name;

  B22.addEventListener('click', () => {
    window.location.href = `${TimeTable[1][1].page}.html`;
  });

  //2,3
  const B23 = document.getElementById('B23');
  B23.textContent = TimeTable[1][2].name;

  B23.addEventListener('click', () => {
    window.location.href = `${TimeTable[1][2].page}.html`;
  });

  //2,4
  const B24 = document.getElementById('B24');
  B24.textContent = TimeTable[1][3].name;

  B24.addEventListener('click', () => {
    window.location.href = `${TimeTable[1][3].page}.html`;
  });

  //2,5
  const B25 = document.getElementById('B25');
  B25.textContent = TimeTable[1][4].name;

  B25.addEventListener('click', () => {
    window.location.href = `${TimeTable[1][4].page}.html`;
  });

  //3,1
  const B31 = document.getElementById('B31');
  B31.textContent = TimeTable[2][0].name;

  B31.addEventListener('click', () => {
    window.location.href = `${TimeTable[2][0].page}.html`;
  });

  //3,2
  const B32 = document.getElementById('B32');
  B32.textContent = TimeTable[2][1].name;

  B32.addEventListener('click', () => {
    window.location.href = `${TimeTable[2][1].page}.html`;
  });

  //3,3
  const B33 = document.getElementById('B33');
  B33.textContent = TimeTable[2][2].name;

  B33.addEventListener('click', () => {
    window.location.href = `${TimeTable[2][2].page}.html`;
  });

  //3,4
  const B34 = document.getElementById('B34');
  B34.textContent = TimeTable[2][3].name;

  B34.addEventListener('click', () => {
    window.location.href = `${TimeTable[2][3].page}.html`;
  });

  //3,5
  const B35 = document.getElementById('B35');
  B35.textContent = TimeTable[2][4].name;

  B35.addEventListener('click', () => {
    window.location.href = `${TimeTable[2][4].page}.html`;
  });

  //4,1
  const B41 = document.getElementById('B41');
  B41.textContent = TimeTable[3][0].name;

  B41.addEventListener('click', () => {
    window.location.href = `${TimeTable[3][0].page}.html`;
  });

  //4,2
  const B42 = document.getElementById('B42');
  B42.textContent = TimeTable[3][1].name;

  B42.addEventListener('click', () => {
    window.location.href = `${TimeTable[3][1].page}.html`;
  });

  //4,3
  const B43 = document.getElementById('B43');
  B43.textContent = TimeTable[3][2].name;

  B43.addEventListener('click', () => {
    window.location.href = `${TimeTable[3][2].page}.html`;
  });

  //4,4
  const B44 = document.getElementById('B44');
  B44.textContent = TimeTable[3][3].name;

  B44.addEventListener('click', () => {
    window.location.href = `${TimeTable[3][3].page}.html`;
  });

  //4,5
  const B45 = document.getElementById('B45');
  B45.textContent = TimeTable[3][4].name;

  B45.addEventListener('click', () => {
    window.location.href = `${TimeTable[3][4].page}.html`;
  });

  //5,1
  const B51 = document.getElementById('B51');
  B51.textContent = TimeTable[4][0].name;

  B51.addEventListener('click', () => {
    window.location.href = `${TimeTable[4][0].page}.html`;
  });

  //5,2
  const B52 = document.getElementById('B52');
  B52.textContent = TimeTable[4][1].name;

  B52.addEventListener('click', () => {
    window.location.href = `${TimeTable[4][1].page}.html`;
  });

  //5,3
  const B53 = document.getElementById('B53');
  B53.textContent = TimeTable[4][2].name;

  B53.addEventListener('click', () => {
    window.location.href = `${TimeTable[4][2].page}.html`;
  });

  //5,4
  const B54 = document.getElementById('B54');
  B54.textContent = TimeTable[4][3].name;

  B54.addEventListener('click', () => {
    window.location.href = `${TimeTable[4][3].page}.html`;
  });

  //5,5
  const B55 = document.getElementById('B55');
  B55.textContent = TimeTable[4][4].name;

  B55.addEventListener('click', () => {
    window.location.href = `${TimeTable[4][4].page}.html`;
  });

  //6,1
  const B61 = document.getElementById('B61');
  B61.textContent = TimeTable[5][0].name;

  B61.addEventListener('click', () => {
    window.location.href = `${TimeTable[5][0].page}.html`;
  });

  //6,2
  const B62 = document.getElementById('B62');
  B62.textContent = TimeTable[5][1].name;

  B62.addEventListener('click', () => {
    window.location.href = `${TimeTable[5][1].page}.html`;
  });

  //6,3
  const B63 = document.getElementById('B63');
  B63.textContent = TimeTable[5][2].name;

  //6,4
  const B64 = document.getElementById('B64');
  B64.textContent = TimeTable[5][3].name;

  B64.addEventListener('click', () => {
    window.location.href = `${TimeTable[5][3].page}.html`;
  });

  //6,5
  const B65 = document.getElementById('B65');
  B65.textContent = TimeTable[5][4].name;

  //7,1
  const B71 = document.getElementById('B71');
  B71.textContent = TimeTable[6][0].name;

  B71.addEventListener('click', () => {
    window.location.href = `${TimeTable[6][0].page}.html`;
  });

  //7,2
  const B72 = document.getElementById('B72');
  B72.textContent = TimeTable[6][1].name;

  B72.addEventListener('click', () => {
    window.location.href = `${TimeTable[6][1].page}.html`;
  });

  //7,3
  const B73 = document.getElementById('B73');
  B73.textContent = TimeTable[6][2].name;

  //7,4
  const B74 = document.getElementById('B74');
  B74.textContent = TimeTable[6][3].name;

  B74.addEventListener('click', () => {
    window.location.href = `${TimeTable[6][3].page}.html`;
  });

  //7,5
  const B75 = document.getElementById('B75');
  B75.textContent = TimeTable[6][4].name;
}

updateTimeTable();

setInterval(updateTimeTable, 1000);