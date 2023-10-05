const back = document.getElementById('back');
back.addEventListener('click', () => {
  window.location.href = 'update.html';
});

var TimeTable = [
  [{ name: '디지털논리회로', page: 'subject1' }, { name: '반도체개발', page: 'subject3' }, { name: '반도체개발', page: 'subject3' }, { name: `자동제어시스템운영`, page: 'subject7' }, { name: '기계요소설계', page: 'subject8' }],
  [{ name: '디지털논리회로', page: 'subject1' }, { name: '반도체개발', page: 'subject3' }, { name: '반도체개발', page: 'subject3' }, { name: `자동제어시스템운영`, page: 'subject7' }, { name: '기계요소설계', page: 'subject8' }],
  [{ name: '디지털논리회로', page: 'subject1' }, { name: '내선공사', page: 'subject4' }, { name: '반도체개발', page: 'subject3' }, { name: `자동제어시스템운영`, page: 'subject7' }, { name: '기계요소설계', page: 'subject8' }],
  [{ name: '시스템프로그래밍', page: 'subject2' }, { name: '내선공사', page: 'subject4' }, { name: '반도체개발', page: 'subject3' }, { name: `자동제어시스템운영`, page: 'subject7' }, { name: '기계요소설계', page: 'subject8' }],
  [{ name: '시스템프로그래밍', page: 'subject2' }, { name: '내선공사', page: 'subject4' }, { name: '진로', page: 'subject5' }, { name: `자동제어시스템운영`, page: 'subject7' }, { name: '기계요소설계', page: 'subject8' }],
  [{ name: '시스템프로그래밍', page: 'subject2' }, { name: '내선공사', page: 'subject4' }, { name: '창체', page: '' }, { name: '디지털논리회로', page: 'subject1' }, { name: '', page: '' }],
  [{ name: '시스템프로그래밍', page: 'subject2' }, { name: '내선공사', page: 'subject4' }, { name: '창체', page: '' }, { name: '디지털논리회로', page: 'subject1' }, { name: '', page: '' }]
];

var T_List = {
  "디지털논리회로": "subject1",
  "시스템프로그래밍": "subject2",
  "반도체개발": "subject3",
  "내선공사": "subject4",
  "진로": "subject5",
  "창체": "",
  "자동제어시스템운영": "subject7",
  "기계요소설계": "subject8"
};

const update = document.getElementById('update');
update.addEventListener('click', () => {
  const selectTime = document.getElementById('selectTime');
  const selectWeek = document.getElementById('selectWeek');
  const selectName = document.getElementById('selectName');

  const time = selectTime.value;
  const week = selectWeek.value;
  const name = selectName.value;

  TimeTable[time][week].name = name;
  TimeTable[time][week].page = T_List[name];

  localStorage.setItem('myTimeTable', JSON.stringify(TimeTable));

  alert("데이터가 변경되었습니다.");
});
  