function createCalendar (){
  const modelData = document.getElementById('model-data');
  if (modelData) {     //上のコードでmodel-dataがある時だけコードを読むように設定している。

  const calendarBody = document.getElementById('calendar-body');
  const monthYear = document.getElementById('month-year');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  const modelDataElement = document.getElementById('model-data');  //HTMLからモデルのデータをJavaScriptにもらっている
  const modelTest = JSON.parse(modelDataElement.value);  //もらったデータをmodelTestに代入（以降 modelTest を使用）

  function containsNumber(array, value) {                 //任意のvalueがモデルに含まれているか判断する関数
    return array.some(model => model.number === value);
  }

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  function generateCalendar(month, year) {
      calendarBody.innerHTML = '';
      monthYear.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

      let firstDayIndex = new Date(year, month).getDay();  //指定された年と月の最初の日の曜日を取得
      let daysInMonth = 32 - new Date(year, month, 32).getDate();  //特定の月の日数を計算している

      let date = 1;
      for (let i = 0; i < 6; i++) {
          let row = document.createElement('tr');  //新しいHTML要素（この場合は<tr>）を作成する
          for (let j = 0; j < 7; j++) {
              let cell = document.createElement('td');
              let subrow = document.createElement('tr');
              let subcell = document.createElement('td');  //サブのセルを追加するための記述
              subcell.id = 'subcell';


              if (i === 0 && j < firstDayIndex) {
                  cell.innerHTML = ' ';
              } else if (date > daysInMonth) {
                  break;
              } else {
                let number = `${year}-${month + 1}-${date}`;
                // cell.dataset.number = number;
                // cell.innerHTML = date + `<table style="width: 100%; margin-top: 10px;"><tr><td>${date}</td></tr><tr><td>aaa</td></tr></table>`;  //ここで日にちの下にサブのセルを追加できる
                cell.innerHTML = date;

                let nowDay = new Date(year, month, date).getDay()  //日曜日が３、土曜日が２
                if (nowDay == 0){
                  cell.id = 'sunday';
                }else if(nowDay == 6){
                  cell.id = 'saturday';
                }

                subcell.innerHTML = '';      //サブのセルを作ってる
                cell.appendChild(subcell);   //サブセルをセルにネストしている
                //cell.setAttribute('data-date', `${year}-${month + 1}-${date}`); // セルにデータ属性を設定
                let hasNumber = containsNumber(modelTest, number);     //testモデルのnumberに「その日付」があるかどうかの判断をしている
                let targetData = modelTest.find(model => model.number === number);  //numberが３のデータをtargetDataに代入している

                if (hasNumber){                           //条件式で判断している
                  subcell.innerHTML = `<a href="${targetData.user_id}/schedules/${targetData.id}">${targetData.title}</a>`;    //サブセルにそのデータのタイトルを代入している
                }
                date++;
              }
              row.appendChild(cell);
          }
          calendarBody.appendChild(row);
      }
  }

  prevButton.addEventListener('click', () => {
      currentMonth--;
      if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
      }
      generateCalendar(currentMonth, currentYear);
  });

  nextButton.addEventListener('click', () => {
      currentMonth++;
      if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
      }
      generateCalendar(currentMonth, currentYear);
  });

  generateCalendar(currentMonth, currentYear);

  }
}









// セルの色を変えるメソッドを作っている。

// function changeCellColor(dateString, color) {
//   let cells = document.querySelectorAll(`[data-date='${dateString}']`);
//   cells.forEach(cell => {
//       cell.style.backgroundColor = color;
//   });
// }

//changeCellColor('2024-12-15', 'red');          // セルの色を変えるメソッドを呼び出している


// セルをクリックしたときのメソッドを作っている。

// function handleDateClick(date) {
//   alert(`You clicked on date: ${date}`);
//   changeCellColor('date', 'red');    // ここにクリックされた日付に対する処理を追加
// }

window.addEventListener('turbo:load', createCalendar);
window.addEventListener('turbo:render', createCalendar);