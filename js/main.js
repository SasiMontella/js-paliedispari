
//ESERCIZIO 1

let word = prompt("Inserici la tua parola");

let reverseWord = reverseWords(word);

if(word == reverseWord){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }



//ESERCIZIO 2

let chooseOddEven = prompt("Scegli pari o dispari");
let userNumber = prompt("Inserisci un numero da 1 a 5");

userNumber = parseInt(userNumber);
let computerRandomNumber = getRandomIntegerFromInterval(1, 5);
let finalNumber = sumNumber(userNumber, computerRandomNumber);

if (finalNumber % 2 == 0 && chooseOddEven == "pari") {
    console.log("Complimenti, hai vinto!");
} else if (finalNumber % 2 == 1 && chooseOddEven == "dispari") {
    console.log("Complimenti, hai vinto!");
} else {
    console.log("Ritenta! La prossima volta sarai più fortunato!");
}



 //-------------FUNZIONI--------------------- 


function reverseWord(string) {

let strReverse = string.split('').reverse().join('');
    return strReverse;
}

function getRandomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+1);
}

function sumNumber(num1, num2) {
    let result = num1 + num2;
    return result;
} 

