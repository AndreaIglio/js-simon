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

setTimeout(userNumberList, 1000);

var userList = [];
var matchedNumbers = [];

function userNumberList (){
  for (var i = 0; userList.length < 5; i++) {
    var userNumber = Number(prompt("Inserisci un numero da 1 a 100"));
    if (userList.indexOf(userNumber) == -1) {
      userList.push(userNumber);
    }

    // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

    for (var i = 0; i < numberList.length; i++) {
      if (userNumber == numberList[i]) {
        matchedNumbers.push(userNumber);
      }
    }
  }

console.log(matchedNumbers);
var x = matchedNumbers.length;
var y = matchedNumbers;

var finalResult = 'You have ' + x + ' matched numbers' + ', the correct numbers are ' + y;
console.log(finalResult);


}




});
