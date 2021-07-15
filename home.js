
    function proc() {
        readCookie();
        areas.classList.remove('off');
      }
    
    // 書き込み
    function writeCookie() {

      var tmp = document.cookie;
      var meishou = String(mei.value) ;
      var suuryou = Number(suu.value) ;
      var tanni = Number(tani.value) ;
      var slot = Number(slo.value) ;

      // クッキー削除用 document.cookie = "T3=;max-age=0 ;SameSite = strict";
      document.cookie = "M"+ slot +"=" + meishou +"@"+ suuryou +"@"+ tanni +";max-age=31536000 ;SameSite = strict";
      console.log(document.cookie);
      alert('課題が追加できました！');
    }

    // 読み込み
    function readCookie() {

      var cookies = document.cookie;
      var cookieItem = cookies.split(";");
      var kakusi = [];
      var cookieTalue = [];
      var cookieValue = [];
      var cookieName = [];
      var loop = 0;
      if(!cookies){
        alert("現在登録されている課題はありません");
      }
      console.log(document.cookie);
      for (i = 0; i < cookieItem.length; i++) {
        var elem = cookieItem[i].split("=");
        console.log(elem[1]);
        var asa = elem[1].split("@");
        if(!elem[0]){
          document.cookie = ""+ elem[0] +"=" + elem[1] +";max-age=0 ;SameSite = strict";
          console.log("undefind回避");
          continue;
        }
        if(unescape(asa[1]) === undefined){
          document.cookie = ""+ elem[0] +"=" + elem[1] +";max-age=0 ;SameSite = strict";
          console.log("undefind回避");
          continue;
        }
          kakusi[Number(loop)] = String(elem[0]);
          cookieTalue[Number(loop)] = unescape(asa[2]);
          cookieValue[Number(loop)] = unescape(asa[1]);
          cookieName[Number(loop)] = String(asa[0]);
          loop = loop +1;
        
      }
    if(loop == 0){
      alert("現在登録されている課題はありません");
    }
    var random = Math.floor(Math.random() * loop);
    kakusite = kakusi[Number(random)] ;
    shutuTalue = cookieTalue[Number(random)] ;
    shutuValue = cookieValue[Number(random)] ;
    shutuName = cookieName[Number(random)] ;
    sine.innerHTML = kakusite ;
    zan.innerHTML = shutuValue;
    gen.innerHTML = shutuName;
    giri.innerHTML = shutuTalue;

    }
    
function cntList(){
  
  var cookies = document.cookie;
  var cookieItem = cookies.split(";");
  var retu = "";
  var cookieValue = [];
  var cookieName = [];
  var cookieNumber = [];
  var loop = 0;
  console.log(document.cookie);
  for (i = 0; i < cookieItem.length; i++) {
    var elem = cookieItem[i].split("=");
    console.log(elem[1]);
    if(!elem[0]){
      document.cookie = ""+ elem[0] +"=" + elem[1] +";max-age=0 ;SameSite = strict";
      console.log("undefind回避");
      continue;
    }
    var asa = elem[1].split("@");
    var yoru = elem[0].trim() ;
    yoru = String(yoru).slice(1);
    console.log(yoru.length);
    
    if(isNaN(asa[1])){
      document.cookie = ""+ elem[0] +"=" + elem[1] +";max-age=0 ;SameSite = strict";
      console.log("undefind回避");
      continue;
    }else{
      cookieNumber[Number(loop)] = yoru;
      cookieValue[Number(loop)] = unescape(asa[1]);
      cookieName[Number(loop)] = String(asa[0]);
      loop = loop +1;
    }
  }
  

for (kai = 0; kai < loop; kai++){
  shutuNumber = cookieNumber[Number(kai)] ;
  shutuValue = cookieValue[Number(kai)] ;
  shutuName = cookieName[Number(kai)] ;
  retu = retu + "スロット" + shutuNumber + "： " + shutuName + "残り"+ shutuValue +"ページ\r\n";
}
 alert(retu);
}


function cntStart()
{
  writeCookie();
}
function gateTAd()
{
  add.classList.remove('off');
}
function cntReset()
{
  add.classList.add('off');
}

function nextCookie() {
  var kadai = sine.innerHTML
  var mane = gen.innerHTML
  var tani = giri.innerHTML
  console.log(mane);
  var pags = 0;

  var cookies = document.cookie;
  var cookieItem = cookies.split(";");
  for (i = 0; i < cookieItem.length; i++) {
    var elem = cookieItem[i].split("=");
    var asa = elem[1].split("@");
    if(elem[0] == kadai){
        pags = Number(asa[1]) ;
    }
  }
  pags = pags - tani;
  if(pags <= 0){
    alert('お疲れ様です。この課題は終了しました！');
    document.cookie = ""+ kadai +"=" + mane +"@"+ pags +"@"+ tani +";max-age=0 ;SameSite = strict";
    console.log(document.cookie);
  }else{
    document.cookie = ""+ kadai +"=" + mane +"@"+ pags +"@"+ tani +";max-age=31536000 ;SameSite = strict";
    console.log(document.cookie);
  }

  proc();
}
function qantum(){
  location.href = 'QA.html'; 
}
function killCookie() {

  var cookies = document.cookie;
  var cookieItem = cookies.split(";");

  console.log(document.cookie);
  for (i = 0; i < cookieItem.length; i++) {
    var elem = cookieItem[i].split("=");
    console.log(elem[0]);
    document.cookie = ""+elem[0]+"="+elem[1]+";max-age=0 ;SameSite = strict";
  }

}
