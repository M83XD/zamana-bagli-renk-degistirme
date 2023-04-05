function zaman() {
    var renkler = ["red","green","blue","pink","orange","gray","yellow","magenta","black","brown","purple","cyan","aqua","crimson"];
var rastgele;
var i;
for (i = 0; i < 8; i++) {
   rastgele = Math.floor(Math.random()* 8)
   document.getElementsByTagName("div")[i].style.backgroundColor=renkler[rastgele];
}
}
function sayac() {
    setInterval(zaman,2000)
    console.log("Sayaç Değeri : " +sayac)
}