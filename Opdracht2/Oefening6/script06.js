var tab = [-2,1,4];

function subtract(){

var getal = prompt("Geef een getal om af te trekken.");

getal = getal -tab[0];
if (getal>=0){
  alert(getal + " Het getal is positief");
}else{
  alert(getal + " Het getal is negatief!");
}
}

function taak3(){
  var getal = prompt("Geef een getal om van af te trekken")
  for (i=0;i<tab.length;i++){
    getal = getal - tab[i];
    if (getal>=0){
      alert(getal + " Het getal is positief");
    }else{
      alert(getal + " Het getal is negatief!");
    }
  }
}
