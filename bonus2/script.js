console.log('bonus2 ok');

// Scrivi una funzione che accetti tre argomenti: un array e due numeri(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

//Function that create a random number from 1 to 100
function randomNumber() {
    const number = Math.floor(Math.random() * 100 + 1);
    return number;
}

let array = [];
for (let i = 0; i < randomNumber(); i++) {
    array[i] = randomNumber();
}
console.log(array);
//Function that create B. B is alway <=arrayLength!;
function createB(array) {
    const number = Math.floor(Math.random() * array.length + 1);
    return number;
}

const b = createB(array);
console.log('b->', b);
//Function that create A. A il always < b!
function createA(b) {
    const number = Math.floor(Math.random() * b);
    return number;
}

const a = createA(b);
console.log('a->', a);

//---------------------------------------------Start the main part---------------------------//

//Function that return a new array with the elements that have     a >= position =< b! 
function newArray(array, a, b) {
    let newArray = [];
    for (let i = a; i <= b; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}
const array2 = newArray(array, a, b);

console.log(`Array with elements with first position ${a} and last position ${b}! Array --> ${array2}`);