// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all’utente di inserire una parola attraverso un prompt:
const userWord = prompt('Dimmi una parola');

// Invoco la mia funzione:
const userWordPalindromeOrNot = isPalindrome(userWord);

// Creo un if per il messaggio di output per l'utente: 
if(userWordPalindromeOrNot === true) {
    alert('la parola è palindroma');
} else {
    alert('la parola non è palindroma');
}

// funzione che verifica se la parola è palindroma o no;
// word --> parola da valutare
// return --> stringa: 'true' se palindroma, altrimenti 'false'.
function isPalindrome(word) {

    // Dichiaro una variabile che conterrà di volta in volta 
    // le lettere che il ciclo for successivamente scorrerà al contrario :
    let reverseWord = '';

    // dichiaro di default che la parola che inserirà l'utente non sarà palindroma, attraverso il valore = false della variabile:
    let palindromeOrNot = false;
   
    // creo un ciclo for che scorrerà al contrario le lettere della parola inserita dall'utente:
    for(let i = userWord.length - 1; i >= 0; i--) {
    
        // aggiungo le lettere nella variabile:
        reverseWord += userWord[i];  
    }
    
    // Se la parola dell'utente è uguale alla stessa al contrario, il messaggio di output sarà "yes"
    if(userWord === reverseWord) {
        palindromeOrNot = true;     
    }
    
    // ritorno il messaggio di output:
    return palindromeOrNot;
}




























// // const IsPalindrome = isWordPalindrome(userWord)



// function isWordPalindrome(userWord){

//     // Dichiaro la variabile di default come falsa(= la parola non è palindroma):
//     let Palindrome = false

//     // Dichiaro una variabile che conterrà di volta in volta 
//     // le lettere che il ciclo for successivamente scorrerà al contrario :
//     let reverseWord;

//     for(let i = userWord.length - 1; i >= 0; i--) {
    
//         // aggiungo le lettere nella variabile:
//         reverseWord += userWord[i];
//         console.log(reverseWord)
//         // Se le parole sono uguali Palindrome = True
//         if(userWord === reverseWord) {
//             Palindrome = true
//             // alert('la parola inserita è palindroma')
//         // } else
//             // alert('la parola inserita non è palindroma')         
//         }
//     }
//     console.log(Palindrome)
//     return Palindrome

// }
