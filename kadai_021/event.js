//ボタンのidを取得
const btn = document.getElementById('btn');

////ボタン押下時の処理
btn.addEventListener('click', () => {

  //ボタン押下時の非同期処理
  setTimeout(() => {

    //文言変更の対象要素のid取得
    const context = document.getElementById('text');
    //文言の変更
    context.textContent = 'ボタンをクリックしました';
  
  }, 2000);
});
