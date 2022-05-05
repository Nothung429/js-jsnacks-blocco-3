// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50
const userNumbers = [];
let somma = 0;
do {
    let numberRequest = Number(prompt("Inserisci un numero"))
    somma = somma + numberRequest;
    userNumbers.push(numberRequest)
    console.log(userNumbers);
} while (somma < 50);
console.log(somma);