function surfaceRectagle(){
  var breedte = prompt("Wat is de breedte van de rechthoek?");
  var lengte = prompt("Wat is de lengte van de rechthoek?");

  alert("De oppervlakte van de rechthoek is " + (breedte*lengte)+" cm²");
}
function perimeterRectangle(){
var breedte2, lengte2, omtrek;
  breedte2 = parseInt(prompt("Wat is de breedte van de rechthoek?"));
  lengte2 = parseInt(prompt("Wat is de lengte van de rechthoek?"));
  omtrek = breedte2+breedte2+lengte2+lengte2;
  alert("De omtrek van de rechthoek is " + omtrek + "cm");
}
