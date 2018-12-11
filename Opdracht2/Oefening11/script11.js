

function calcAverage(){
  var getal = 0;
  var lijst=[];
  var isgetal = false;
  var som = 0;
  var laatsteuitkomst=0;
do {
getal = prompt("Geef een getal. Als je een negatief getal geeft maakt de oefening de laatste berekeningen.");
isgetal = isNaN(getal);
while (isgetal==true){
  alert("Dit is geen getal!")
  getal = prompt("Gelieve een getal in te geven!");
isgetal = isNaN(getal);
}
if (getal>=0){
lijst.push(getal);
}
}while (getal >=0);

for(i=0;i<lijst.length;i++){
som = +som + + lijst[i];
som = som.toFixed(2);
}
alert("Je hebt " + lijst.length + " waarden ingegeven.");

laatsteuitkomst = (som/=lijst.length);
laatsteuitkomst = laatsteuitkomst.toFixed(2);
alert(laatsteuitkomst);

}
