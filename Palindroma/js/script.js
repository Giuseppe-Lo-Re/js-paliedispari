// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// // Chiedo all’utente di inserire una parola attraverso un prompt:
const userWord = prompt('Dimmi una parola');
const userWordPalindromeOrNot = isPalindrome(userWord)

if(userWordPalindromeOrNot === 'yes') {
    alert('la parola è palindroma')
} else {
    alert('la parola non è palindroma')
}

// funzione che verifica se la parola è palindroma o no;
// word --> parola da valutare
// return --> stringa: 'yes' se palindroma, altrimenti 'no'.
function isPalindrome(word) {

    // Dichiaro una variabile che conterrà di volta in volta 
    // le lettere che il ciclo for successivamente scorrerà al contrario :
    let reverseWord;
    let palindromeOrNot = 'no';
   
    for(let i = userWord.length - 1; i >= 0; i--) {
    
        // aggiungo le lettere nella variabile:
        reverseWord += userWord[i];  
    }

    if(userWord === reverseWord) {
        palindromeOrNot = 'yes'     
    }

    return palindromeOrNot
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
