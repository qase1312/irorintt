const socket = io();

    const selectTime = document.getElementById('selectTime');
    const selectWeek = document.getElementById('selectWeek');
    const selectName = document.getElementById('selectName');
    const updateButton = document.getElementById('updateButton');

    updateButton.addEventListener('click', () => {
      const time = selectTime.value;
      const week = selectWeek.value;
      const name = selectName.value;

      // 서버로 업데이트 요청 보내기
      socket.emit('update', { time, week, name });
    });

    // 서버로부터 업데이트된 데이터 받기
    socket.on('update', (data) => {
      // 업데이트된 데이터를 화면에 반영
      // 예: 데이터를 테이블에 렌더링하거나 화면을 업데이트하는 코드 추가
    });