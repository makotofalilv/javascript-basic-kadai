//変数へ値を設定
let num = 60;

//条件分岐処理
if ((num % 15) == 0){
  console.log("3と5の倍数です");
}else if ((num % 3) == 0){
  console.log("3の倍数です");
}else if ((num % 5) == 0){
  console.log("5の倍数です");
}else {
  console.log(num);
}