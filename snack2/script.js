console.log('snack2 ok');

//Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

//Function for a random number
function randomNumbers(min, max) {
    const number = Math.floor(Math.random() * (max - min) + 1);
    return number;
}


//Function that create a random type of Zucchini!
function randomZucchini() {
    const number = randomNumbers(1, 7);
    let zucchini = '';
    switch (number) {
        case 1:
            zucchini = 'Zucchina verde';
            break;
        case 2:
            zucchini = 'Zucchina chiara';
            break;
        case 3:
            zucchini = 'Zucchina col fiore';
            break;
        case 4:
            zucchini = 'Zucchina tonda';
            break;
        case 5:
            zucchini = 'Zucchina lunga';
            break;
        case 6:
            zucchini = 'Zucchina gialla';
            break;
        case 7:
            zucchini = 'Zucchina eccentrica';
            break;
    }
    return zucchini;
}



let arrayZucchini = [];

//Creation of 10 objects
for (let i = 0; i < 10; i++) {
    let zucchini = {
        type: randomZucchini(),
        weigth: randomNumbers(20, 100),
        length: randomNumbers(5, 30),
    }
    arrayZucchini.push(zucchini);
};
console.log(arrayZucchini);

//Declaration of two arrays (under 15 and over 15)cm!
let arrayOver = [];
let arrayUnder = [];


//Function that push the zucchini under 15cm in arrayUnder and over 15cm in arrayOver!
function underOver(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < 15) {
            arrayUnder.push(array[i]);
        } else {
            arrayOver.push(array[i]);
        }
    }
};

underOver(arrayZucchini);


// Function that calculate the TOTAL WEIGTH of the ZUCCHINI
function totalWeight(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].weigth;
    }
    return sum;
}

const sumUnder = totalWeight(arrayUnder);
const sumOver = totalWeight(arrayOver);

console.log(`Il peso totale delle zucchine che pesano meno di 15cm è  ${sumUnder}`);
console.log(`Il peso totale delle zucchine che pesano meno di 15cm è  ${sumOver}`);

