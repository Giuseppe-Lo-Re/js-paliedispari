// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all’utente di scegliere tra pari e dispari attraverso un prompt:
const userEvenOrOdd = prompt('pari o dispari?');

// Chiedo all’utente di inserire un numero da 1 a 5 attraverso un prompt
//  e lo trasformo in valore numerico:
const userNumber = parseInt(prompt('scegli un numero compreso tra 1 e 5'));

// Invoco la funzione per generare un numero random (sempre da 1 a 5) per il computer:
const computerNumber = getRndInteger(1, 5);
console.log('computer', computerNumber)
// sommo i due numeri:
const sum = userNumber + computerNumber;
console.log('somma', sum)


// Invoco la funzione che valuterà se la somma dei numeri è pari o dispari:
const sumEvenOrOdd = isEvenOrOdd(userNumber);

// Creo un if per il messaggio di output per l'utente:
if(sumEvenOrOdd === 'even' && userEvenOrOdd === 'pari') {
    alert ('Hai vinto! ')
} else {
    alert ('Hai perso!')
}

// funzione che genera un numero random compreso tra 1 e 5:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione che genera se la somma dei due numeri è pari o dispari:
// sum -> numero da valutare;
// return -> stringa: 'even' se pari, 'odd' se dispari
function isEvenOrOdd(number) {

    // Dichiaro la variabile che utilizzerò come output:
    let evenOrOdd;

    if(sum % 2 === 0) {
        evenOrOdd = 'even'
    } else {
        evenOrOdd = 'odd';
    }

    return evenOrOdd;
}