//Dateオブジェクトの生成
const today = new Date();
//年の取得
const year = today.getFullYear();
//月の取得
const month = today.getMonth();
//日の取得
const date = today.getDate();

//表示
console.log(year + '年' + month + '月' + date + '日')