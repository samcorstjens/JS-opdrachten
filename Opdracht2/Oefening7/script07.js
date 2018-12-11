function makeChoice(){


let keuze = prompt("Kies 1, 2 of 3");
keuze = parseInt(keuze);
switch (keuze) {
  case 1:
  alert("Thank you");
  break;
  case 2 :
  alert("Hello");
  break;
  case 3 :
  alert("Good Bye");
  break;
  default:
    alert("Excuse me, what do you want?");
  }


}
// if (keuze==1){
  //  alert("Thank you");
  //} else if (keuze==2){
  //  alert("Hello");
  //}else if (keuze==3){
//    alert("Good Bye");
//  }else {
  //  alert("Excuse me, what do you want?");
//  }
