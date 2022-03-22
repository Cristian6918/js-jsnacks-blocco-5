console.log('bonus ok');

//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro, es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]


//Creation of the first array!
const arrayA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];

//Function that create an arrayB with the same length of the arrayA!
function createArrayB(array) {
    let arrayB = [];
    for (let i = 0; i < array.length; i++) {
        arrayB.push(i);
    }
    return arrayB;
}
const arrayB = createArrayB(arrayA);

console.log(arrayA);
console.log(arrayB);

//Function to create the third Array with the elements of the first two Arrays!
function createArrayC(arrayA, arrayB) {
    let arrayC = [];
    for (let i = 0; i < arrayA.length; i++) {
        arrayC.push(arrayA[i]);
        arrayC.push(arrayB[i]);
    }
    return arrayC;
}

const arrayC = createArrayC(arrayA, arrayB);
console.log(arrayC);