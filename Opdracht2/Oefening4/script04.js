var tab = [-2,1,4];

function add(){
var toevoegen = prompt("Voeg een getal toe.");
  tab.push(toevoegen);
}

function display(){
  for (i=0; i < tab.length;i++){
    alert(tab[i]);
  }
}
