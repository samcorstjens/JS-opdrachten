function testWhile(){
  var woord;
  var zin = "";
var opl = false;

while (opl!=true){
woord = prompt("Geef een string-letters. Dit eindigt wanneer je de letter p geeft");
  zin = zin + woord + " ";
  opl = zin.includes("p");
}

alert(zin);
}
