/*
************
 FUNCTIONS
************
    - JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression. 
        - function declarations are hoisted in our code, and run only when we call them. So any function in our code sits and waits to be ran until we call it by it's name. Think of it as student with his or her hand up, waiting to ask a question. That student doesn't ask their question until the teach calls upon them. 
        - function expressions are not hoisted, and are generally stored in variables
            - after a function has been stored in a variable, that variables name can then be called to run the function
    - functions without names are known as anonymous functions
*/

// FUNCTION DECLARATION
sayHello();

function sayHello() {
    console.log('hi');
}

sayHello; // won't run
sayHello();

// FUNCTION EXPRESSIONS

let greetings= function () { // anonymous function
    console.log('hello');
}

greetings(); // can call it by variable name and ()


/*
************
 PARAMETERS
************
    - think of parameters as a newly declared variable that we haven't given a value to yet.
        - the value we pass into our function when we call the function to run (also known as an argument), is the value that gets assigned to the parameter.
    - general naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number
*/

function myDog(husky) { // husky is the parameter
    console.log(`My dog's name is ${husky}`);
}

myDog('Luna'); // 'Luna' is the argument, or the value, we are passing to the parameter of husky

let pet = myDog; // we are not calling, or invoking, myDog(); We are assigning the function to a variable.

pet('Charles');


// MULTIPLE PARAMETERS AND ARGUMENTS

function allMyDogs(smallHusky, bigHusky, borderCollie) {
    // if(smallHusky === undefined || bigHusky === undefined || borderCollie === undefined) {
    //     console.log('no arguments passed');
    // } else {
    //     console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}.`);
    // }

    (smallHusky === undefined || bigHusky === undefined || borderCollie === undefined) ?
    console.log('no arguments passed') : console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}.`);
}

allMyDogs();
allMyDogs('Peter', 'Charles', 'Potts');

// OR:

let checker = 'no argument passed'

function allMyDogs(smallHusky = checker, bigHusky = checker, borderCollie = checker) {
    console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}.`);
}

allMyDogs();
allMyDogs('Peter', 'Charles', 'Potts');


/*
************
   RETURN
************
    - functions can also manipulate the data sent to them, and return a new value
*/

function calculator(one, two, three) {
    // console.log(one, two, three);

    let avgWeight = Math.round((one + two + three) / arguments.length);
    return avgWeight;
}

let avgWeight = calculator(15, 60, 55);
console.log(`My dogs weigh an average of ${avgWeight} lbs.`);

/*
************
   ARROW FUNCTIONS
************
*/

// function func0(a, b) {
//     return a + 2 * b;   
// }

// // ^ same as:

// const func1 = function (a, b) {
//     return a + 2 * b;
// }

let f = () => 3; // right of arrow (3) return value of function

console.log(f());

// concise-body arrow function (one expression to right of arrow)
let f = (x) => x + 5 ; // left of arrow - (x) - takes in value; right of arrow - x + 5 - return value of function

console.log(f(50));

// block-body arrow function (block of code to right of arrow)
<<<<<<< HEAD
// need to return if block-body is used
=======
// need to reutrn if block-body is used
>>>>>>> c90055c15874bae3d31f51df74448730c5b4c7a6

let g = (x) => {
    console.log(x); // 7
};

g(7); // 7
console.log(g(7)); // undefined; nothing is returned

// **************************

let g = (x) => {
    console.log(x); // 7
    return x * 3;
};

g(7); // 7
console.log(g(7)); // 21



const f0 = (x) => 3 * x;

// ^ same as:

const f1 = (x) => {
    return 3 * x;
};

// don't need a semicolon after a block of code

let arr = [1,2,3,4,5,6,7,8,9];

function threeTimes (x) {
    return 3 * x;
}

console.log(arr.map(x => 3 * x));

const averageThree = (x, y, z) => Math.round((x + y + z) / 3);

console.log(averageThree(46, 18, 3));


// ************************************

const func = x => (() => 3 * x); // takes variable and returns function that always returns 3 * x

console.log(func(4)()); // returns value from ^ with empty ()


const returnFirstArg = (x, y) => x;
const returnSeconArg = (x, y) => y;

let v = returnFirstArg(4, 5);
let z = returnSeconArg(46, 79);

console.log(`${v}, ${z}`);


const returnThree = (x) => 3;
const returnFalse = (x) => false;

const multiplyNumbers = (x, y) => ((x + 3) * y);
