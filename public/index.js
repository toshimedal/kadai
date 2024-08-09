// public/index.js

window.addEventListener('DOMContentLoaded', (event) => {
    var today = new Date(); 
    var date = today.getDate();
    var month = today.getMonth();
    var plus30 = today.getDate()+30;
    var plus60 = today.getDate()+60;
    var plus90 = today.getDate()+90;
    
    document.querySelector('.thirty').addEventListener('click', (event) => {
      var dt = new Date();
      dt.setDate(dt.getDate()+30);
      const newElement = document.createElement('li');
      const text = document.querySelector('.input-text').value+"　　　　期間:30日  "+"期限:"+dt.toLocaleDateString("ja-JP-u-ca-Japanese", { era: "long" });
      newElement.innerHTML = text;
      document.querySelector('.shop_list').appendChild(newElement);
      fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shop: text }) });
    });
    document.querySelector('.sixty').addEventListener('click', (event) => {
        var dt = new Date();
        dt.setDate(dt.getDate()+60);
        const newElement = document.createElement('li');
        const text = document.querySelector('.input-text').value+"　　　　期間:60日  "+"期限:"+dt.toLocaleDateString("ja-JP-u-ca-Japanese", { era: "long" });
        newElement.innerHTML = text;
        document.querySelector('.shop_list').appendChild(newElement);
        fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shop: text }) });
      });
    document.querySelector('.ninety').addEventListener('click', (event) => {
        var dt = new Date();
        dt.setDate(dt.getDate()+90);
        const newElement = document.createElement('li');
        const text = document.querySelector('.input-text').value+"　　　　期間:90日  "+"期限:"+dt.toLocaleDateString("ja-JP-u-ca-Japanese", { era: "long" });
        newElement.innerHTML = text;
        document.querySelector('.shop_list').appendChild(newElement);
        fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shop: text }) });
      });
    document.querySelector('.today').addEventListener('click', (event) => {
        var dt = new Date();
        
        const newElement = document.createElement('li');
        const text = "今日は"+dt.toLocaleDateString("ja-JP-u-ca-Japanese", { era: "long" });
        newElement.innerHTML = text;
        document.querySelector('.shop_list').appendChild(newElement);
        fetch('/api/user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ shop: text }) });
      });
});

