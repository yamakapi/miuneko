document.addEventListener('init', function(event) {
  if(event.target.id == 'page1') {
    pieChart();
  } else if(event.target.id == 'page2'){
    barChart();
  }
});
 function doClick() {
    var text1 = document.getElementById('text1');
    var str = text1.value;
    var res = 'あなたは、「' + str + '」と入力しました。';
    var msg = document.getElementById('msg');
    msg.textContent = res;
}



function barChart() {
  var config = {
    type: 'line',
data: {
 
        //データ項目のラベル
      labels: ["1月5日", "1月6日", "1月7日", "1月8日", "1月9日", "1月10日","1月11日", "1月12日", "1月13日", "1月14日", "1月15日", "1月16日"],
      //データセット 
      datasets: [
          {
              //凡例
              //label: "ml/分/1.73ml",
              //面の表示目
              fill: false,
              //線のカーブ
              lineTension: 0,
              //背景色
            //  backgroundColor: "rgba(214,133,176,0.7)",
              //枠線の色
              borderColor: "rgba(214,133,176,0.7)",
              //結合点の枠線の色
              pointBorderColor: "rgba(214,133,176,0.7)",
              //結合点の背景色
              pointBackgroundColor: "#fff",
              //結合点のサイズ
              pointRadius: 5,
              //結合点のサイズ（ホバーしたとき）
              pointHoverRadius: 8,
              //結合点の背景色（ホバーしたとき）
              pointHoverBackgroundColor: "rgba(179,181,198,1)",
              //結合点の枠線の色（ホバーしたとき）
              pointHoverBorderColor: "rgba(220,220,220,1)",
              //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
              pointHitRadius: 15,
              //グラフのデータ
              data: [30, 52,85,68,,56,30, 52,85,68,82,56]
                      
          },
          
          
      ]
  },
  //オプションの設定
  options: {
     spanGaps: true,
      //軸の設定
      scales: {
          //縦軸の設定spanGaps: true
          yAxes: [{
               display: true,
            scaleLabel: {
               display: true,
               labelString: "ml/分/1.73ml",
               fontFamily: 'monospace',
               fontSize: 14
            },
              ticks: {
                  //最小値を0にする
                  beginAtZero: true
          }}]
      },
      
      //ホバーの設定
      hover: {
          //ホバー時の動作（single, label, dataset）
          mode: 'single'
      }
  }

  };
  var ctx = document.getElementById("bar-chart-area").getContext("2d");
  window.myBar = new Chart(ctx, config);  
}
