// 1. literals

console.log(`string ${3 * 7}`);

let x = -4.8;

console.log(x);
console.log(-4.8);

let arr = [3, 15, 3, 30, null];

console.log(arr[4]);

for (let i of (2 > 3) ? [0,1,2] : ['a', 'b', 'c']) {
    console.log(i);
}

const dogArray = ['whippet', 'st bernard', 'goldendoodle', 'skye terrier', 'chinese crested'];

// Given dogArray, create a new array dogStatements.
// In dogStatements, you should have "____ is a good dog" if the dog's name is 12 characters or less.
// If the dog's name is greater than 10 characters, you should have "_____ is a VERY good dog".
const dogArray = ['whippet', 'st bernard', 'goldendoodle', 'skye terrier', 'chinese crested'];
// ['whippet is a good dog', 'st bernard is a good dog', etc. ]
// PLEASE USE: for-in or for-of, and a ternary

let dogStatements = [];

for (const dog of dogArray) {
    // for (var i = 0; i < dogArray.length; i ++) {
    //     if(dogArray[i].length <= 12) {
    //         dog.push(`${dogArray[i]} is a good dog`);
    //     } else {
    //         dog.push(`${dogArray[i]} is a very good dog`);
    //     }
    // }

    dogStatements.push((dog.length <= 12) ? `${dog} is a good dog` : `${dog} is a very good dog`);
}

console.log(dogStatements);

// CHALLENGE 2.
// Given dogStatements (output of first challenge), console.log:
// wHiPpEt iS A GoOd dOg
// sT BeRnArD Is a gOoD DoG
// etc.
// PLEASE USE: ONE for-of, ONE for-in, and a ternary

for (let statement of dogStatements) {
    let arr = [];
    for (let index in statement) {
        if (index % 2 === 0) {
            arr.push(statement[index].toLowerCase());
        } else {
            arr.push(statement[index].toUpperCase());
        }
       
    }
    let str = arr.join('');
    console.log(str);
}

