

function calcBMI(){
  var kg = prompt("Geef in kg hoeveel je weegt.");
  var meter = prompt("Geef aan hoeveel meter je bent.");

  var gemiddelde = (kg/(meter*meter));
gemiddelde = gemiddelde.toFixed(2);
if (gemiddelde>40){
  alert("BMI = " + gemiddelde + " , Morbide obesitas");
} else if (gemiddelde>=35){
  alert("BMI = " + gemiddelde + " , Ernstige overgewicht");
} else if (gemiddelde>=30){
  alert("BMI= " + gemiddelde + " , matig overgewicht");
} else if (gemiddelde>=25){
  alert("BMI = " +gemiddelde + " , overgewicht");
} else if (gemiddelde>=18.5){
  alert("BMI = " + gemiddelde + " , normale bouw");
} else if (gemiddelde>=16.5){
  alert("BMI = " + gemiddelde + ", dunheid");
} else if (gemiddelde<16.5){
  alert("BMI = " + gemiddelde + ", ondervoeding of hongersnood")
}







}
