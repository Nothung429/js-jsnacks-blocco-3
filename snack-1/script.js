// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50
const arrayUser = [];
do {
    const numberRequest = Number(prompt("Inserisci un numero"));
    console.log(numberRequest);
    arrayUser.push(numberRequest);
} while (arrayUser < 50);
console.log(arrayUser);