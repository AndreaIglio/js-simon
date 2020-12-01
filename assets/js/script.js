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
  
  /** functions which loop through an array
   * @param array
   * @param e - the element we will loop through the array to check if is include or not
   * 
   */

  // function inArray(array, e) {
  //   var i = 0;
  //   var result = false;
  //   while (i < array.length && result == false) {
  //     if (array[i] == element) {
  //       result = true;
  //     }
  //     i++;
  //   }
  //   return result;
  // }

  // ESERCIZIO
  // TASK 1 - Un alert espone 5 numeri casuali diversi.

  var numberList = [];

  var i = 0;

  while (numberList.length < 5) {
    var x = Math.floor(Math.random() * Math.floor(100));

    if (numberList.indexOf(x) == -1) {
      numberList.push(x);
    }

    i++;
  }

  console.log(numberList);

  alert(numberList);

  // Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

  setTimeout(userNumberList, 1000);

  var matchedNumbers = [];

  function userNumberList() {

    var userList = [];

    while (userList.length < 5) {
      var userNumber = Number(prompt("Inserisci un numero da 1 a 100"));
      if (userNumber > 100 || userNumber < 0) {
        var userNumber = Number(prompt("Inserisci un numero da 1 a 100"));
      } else {
        if (userList.includes(userNumber) == false) {
          userList.push(userNumber);
          console.log(userList);
          for (var i = 0; i < numberList.length; i++) {
            if (userNumber == numberList[i]) {
              matchedNumbers.push(userNumber);
            }
          }
        }
      }
    }

    var x = matchedNumbers.length;
    var y = matchedNumbers;

    console.log(x);
    console.log(y);

    switch (matchedNumbers.length) {
      case 0:
        console.log("You dont have any matched numbers");
        break;
      case 1:
        console.log("You have one number that match and is " + y);
        break;
      case 2:
      case 3:
      case 4:
      case 5:
        console.log(
          "You have " +
            x +
            " matched numbers" +
            ", the correct numbers are " +
            y
        );
        break;
    }
  }
});
