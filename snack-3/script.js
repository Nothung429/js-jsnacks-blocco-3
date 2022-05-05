// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari
const numbers = [12,34,57,86,39,76,36,77,81,124];
let oddNumbers = [];
let evenNumbers = [];
console.log(numbers);
for (let i = 0; i < numbers.length ; i++) {
    if (numbers[i] % 2 === 1) {
        oddNumbers.push(numbers[i]);
    } else {
        evenNumbers.push(numbers[i]);
    }
}
console.log(oddNumbers);
console.log(evenNumbers);
document.querySelector(".odd").innerHTML = `Odd Numbers: ${oddNumbers}`;
document.querySelector(".even").innerHTML = `Even Numbers: ${evenNumbers}`;