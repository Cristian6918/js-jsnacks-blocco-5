console.log('js ok');


//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.


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

for (i = 0; i < 5; i++) {
    let zucchini = randomZucchini();
    console.log(zucchini);
}

let arrayZucchini = [];
//Creation of 10 objects
for (i = 0; i < 10; i++) {
    let zucchini = {
        type: randomZucchini(),
        weigth: randomNumbers(20, 100),
        length: randomNumbers(5, 30),
    }
    arrayZucchini.push(zucchini);
}

console.log(arrayZucchini);

// Function that calculate the TOTAL WEIGTH of the ZUCCHINI
function totalWeight(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i].weigth;
    }
    return sum;
}

const sum = totalWeight(arrayZucchini);

console.log(`La somma totale delle zucchine è  ${sum}`);
