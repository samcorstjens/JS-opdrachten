var straallengte;
var cirkeloppervlakte;
function straal(){
straallengte = parseInt(prompt("Wat is de straal van de cirkel?"))

}
function cirkel(){
  cirkeloppervlakte = parseInt(straallengte*straallengte*Math.PI);
  alert("De oppervlakte van de cirkel is " + cirkeloppervlakte + " cm²");
}
