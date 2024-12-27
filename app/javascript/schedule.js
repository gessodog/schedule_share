function timescheduleColor (){
  const detailElement = document.getElementById('model-time-schedule');
  if (detailElement) {     //上のコードでmodel-time-scheduleがある時だけコードを読むように設定している。

  const modelScheduleElement = document.getElementById('model-time-schedule');  //HTMLからモデルのデータをJavaScriptにもらっている
  const modelSchedule = JSON.parse(modelScheduleElement.value);  //もらったデータをmodelTestに代入（以降 modelSchedule を使用）


  const startId = modelSchedule.start_id ;   // start_idを取得
  const endId = modelSchedule.end_id ;       // end_idを取得

  const firstTop = document.getElementsByClassName('first_top_square');  //赤色を加える部分  配列
  const firstBottom = document.getElementsByClassName('first_bottom_square');
  const square = document.getElementsByClassName('color_square');
  const lastTop = document.getElementsByClassName('last_top_square');  //赤色を加える部分  配列
  const lastBottom = document.getElementsByClassName('last_bottom_square');


  for (let i = 2; i < 50; i++) {        //2から50でそれぞれの列がスタートとエンドの間にあるか確認している
    if (i == 2 && startId <= i && endId > i) {
      firstTop[0].id = 'add_red';
    }else if (i == 3 && startId <= i && endId > i) {
      firstBottom[0].id = 'add_red';
    }else if (i == 48 && startId <= i && endId > i) {
      lastTop[0].id = 'add_red';
    }else if (i == 49 && startId <= i && endId > i) {
      lastBottom[0].id = 'add_red';
    }else if (startId <= i && endId > i) {
      square[i - 4].id = 'add_red';
    }
  }
  }
};


window.addEventListener('turbo:load', timescheduleColor);
window.addEventListener('turbo:render',timescheduleColor);