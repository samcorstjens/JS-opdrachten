var Celsius;
var Fahrenheit;
var Kelvin;

function TemperatureConversion(){
  var soortberekening = prompt(" 0.End of the program\n 1.Celsius to Fahrenheit \n 2.Celsius to Kelvin \n 3.Fahrenheit to Celsius \n 4.Fahrenheit to Kelvin \n 5.Kelvin to Celsius \n 6.Kelvin to Fahrenheit");
if (soortberekening ==0){
  alert("Het programma word afgesloten");
} else if (soortberekening==1){
Celsius = prompt("Geef de Celsius.")
Fahrenheit = ((Celsius*9/5)+32);
Fahrenheit = Fahrenheit.toFixed(2);
alert(Fahrenheit + " °F")
} else if (soortberekening==2){
  Celsius = prompt("Geef de Celsius.");
  Kelvin = +Celsius + +273.15;
  Kelvin = Kelvin.toFixed(2);
  alert(Kelvin + " K")
} else if (soortberekening==3){
  Fahrenheit = prompt("Geef de Fahrenheit");
  Celsius = ((Fahrenheit-32)/(9/5));
  Celsius = Celsius.toFixed(2);
  alert(Celsius + " °C")
} else if (soortberekening==4){
Fahrenheit= prompt("Geef de Fahrenheit");
  Kelvin = +((Fahrenheit-32)*(5/9)) + + 273.15;
  Kelvin = Kelvin.toFixed(2);
  alert(Kelvin + " K");
} else if (soortberekening==5){
  Kelvin = prompt("Geef de Kelvin");
  Celsius = (Kelvin-273.15);
  Celsius = Celsius.toFixed(2);
  alert(Celsius + " °C")
} else if (soortberekening==6) {
  Kelvin = prompt("Geef de Kelvin");
  Fahrenheit = +((Kelvin *(9/5))-459.67);
  Fahrenheit = Fahrenheit.toFixed(2);
  alert(Fahrenheit + " °F");
}

}
