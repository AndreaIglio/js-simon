// Opzione deprecata da JQ 3.0
// Codice viene eseguito solo quando documento e' carico
$(document).ready(function () {
  //codice jQuery


  // Variabili con valore

  // Variabili senza valore

  // Functions
});

// Opzione piu recente
// Codice viene eseguito solo quando documento e' carico
$(function () {
  //codice jQuery
  
  
  // Variabili con valore

  // Variabili senza valore
  
  // Functions


// ESERCIZIO
// TASK 1 - Un alert espone 5 numeri casuali diversi.

  var numberList = [];

  var i=0;

  while (numberList.length < 5){

  var x = Math.floor(Math.random() * Math.floor(100));

  if(numberList.indexOf(x) == -1){
   numberList.push(x);
  }
  
  i++;
}

  console.log(numberList);

  alert(numberList);

  
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.




});
