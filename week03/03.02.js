let obj1 = {
    a: 0,
    b: 1        
};

let obj2 = {
    a: 0,
    b: 1
};

console.log(obj1 === obj2);

obj2 = obj1;

obj2.a = 88;
console.log(obj1);

let str1 = 'mountain';

let str2 = str1; // let balue of string 2 equal to value of string 1

str2 = 'river';

console.log(str1);
console.log(str2);

let arr1 = [4, 9, 33];

let arr2 = [4, 9, 33];
console.log(arr1 === arr2); // false--two different arrays--point to do different storage areas


let empty = [];

function checkIfEmpty (arr) {
    return arr === [];
}

console.log(checkIfEmpty(empty));  // false--arr[] different from empty[]

let empty = [];

function checkIfEmpty (arr) {
    return arr.length === 0;
}

console.log(checkIfEmpty(empty));  // true


function assign3ToB (obj) {
    obj.b = 3;
}

let obj = {
    a: 2
};

assign3ToB(obj)

console.log(obj) // console.logs { a: 2, b: 3 }