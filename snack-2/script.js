// Fai inserire un numero, che chiameremo N, all’utente
let casualNumber = Number(prompt("Inserisci un numero"));
console.log(casualNumber);
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100
const arrayGen = [];
for (let i = 0 ; i < casualNumber ; i++) {
    for (let i = 0 ; i < 10 ; i++) {
        arrayGen.push(Math.floor(Math.random() * 100) + 1);
    }
};
console.log(arrayGen);



























// Ogni volta che ne crei uno, stampalo a schermo
