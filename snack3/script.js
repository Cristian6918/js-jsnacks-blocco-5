console.log('snack3 ok');

// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)


let string = prompt('Inserire una string!');
//Function that Reverse the imput string;
function reverseString(string) {
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    string = reverseString;
    return string;
}

alert(reverseString(string));