const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let TimeTable = [
  [{ name: '디지털논리회로', page: 'subject1' }, { name: '반도체개발', page: 'subject3' }, { name: '반도체개발', page: 'subject3' }, { name: `자동제어시스템운영`, page: 'subject7' }, { name: '기계요소설계', page: 'subject8' }],
  [{ name: '디지털논리회로', page: 'subject1' }, { name: '반도체개발', page: 'subject3' }, { name: '반도체개발', page: 'subject3' }, { name: `자동제어시스템운영`, page: 'subject7' }, { name: '기계요소설계', page: 'subject8' }],
  [{ name: '디지털논리회로', page: 'subject1' }, { name: '내선공사', page: 'subject4' }, { name: '반도체개발', page: 'subject3' }, { name: `자동제어시스템운영`, page: 'subject7' }, { name: '기계요소설계', page: 'subject8' }],
  [{ name: '시스템프로그래밍', page: 'subject2' }, { name: '내선공사', page: 'subject4' }, { name: '반도체개발', page: 'subject3' }, { name: `자동제어시스템운영`, page: 'subject7' }, { name: '기계요소설계', page: 'subject8' }],
  [{ name: '시스템프로그래밍', page: 'subject2' }, { name: '내선공사', page: 'subject4' }, { name: '진로', page: 'subject5' }, { name: `자동제어시스템운영`, page: 'subject7' }, { name: '기계요소설계', page: 'subject8' }],
  [{ name: '시스템프로그래밍', page: 'subject2' }, { name: '내선공사', page: 'subject4' }, { name: '창체', page: '' }, { name: '디지털논리회로', page: 'subject1' }, { name: '', page: '' }],
  [{ name: '시스템프로그래밍', page: 'subject2' }, { name: '내선공사', page: 'subject4' }, { name: '창체', page: '' }, { name: '디지털논리회로', page: 'subject1' }, { name: '', page: '' }]
];
// 웹 소켓 연결 설정
io.on('connection', (socket) => {
  console.log('A user connected');

  // 클라이언트로부터의 업데이트 요청 받기
  socket.on('update', (data) => {
    const { time, week, name } = data;

    // 선택한 정보로 TimeTable 업데이트
    TimeTable[time][week].name = name;

    // 변경된 데이터를 모든 클라이언트에게 브로드캐스팅
    io.emit('update', TimeTable);
  });

  // 클라이언트 연결 해제 처리
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
