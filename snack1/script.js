console.log('js ok');


//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.


//Function for a random number
function randomNumbers(min, max) {
    const number = Math.floor(Math.random() * (max - min) + 1);
    return number;
}


//Function that create a random type of Zucchini!
function randomZucchini() {
    const number = randomNumbers(1, 6);
    let zucchini = '';
    switch (number) {
        case 1:
            zucchini = 'Zucchina verde';
        case 2:
            zucchini = 'Zucchina chiara';
        case 3:
            zucchini = 'Zucchina col fiore';
        case 4:
            zucchini = 'Zucchina tonda';
        case 5:
            zucchini = 'Zucchina lunga';
        case 6:
            zucchini = 'Zucchina gialla';
        case 7:
            zucchini = 'Zucchina eccentrica';
    }
    return zucchini;
}

let arrayZucchini = [];
