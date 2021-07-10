
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
      console.log(document.cookie);
      for (i = 0; i < cookieItem.length; i++) {
        var elem = cookieItem[i].split("=");
        console.log(elem[1]);
        var asa = elem[1].split("@");

          kakusi[Number(loop)] = String(elem[0]);
          cookieTalue[Number(loop)] = unescape(asa[2]);
          cookieValue[Number(loop)] = unescape(asa[1]);
          cookieName[Number(loop)] = String(asa[0]);
          loop = loop +1;
        
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