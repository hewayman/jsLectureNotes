// CHALLENGE 1
// Who's name is longer?

/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
*/

let myName = "Hannah";
let friend = "Kris";

console.log(myName.length);
console.log(friend.length);

/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

if (myName.length > friend.length) {
    console.log(`${friend}'s name is shorter than ${myName}'s name.`)
} else if (myName.length < friend.length) {
    console.log(`${friend}'s name is longer than ${myName}'s name.`)
}

/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

if (myName.length > friend.length) {
    let letters = myName.length - friend.length;
    console.log(`${friend}'s name is shorter than mine by ${letters} letters`);
} else if (myName.length < friend.length) {
    let letters = friend.length - myName.length;
    console.log(`${friend}'s name is longer than mine by ${letters} letters`);
} else {
    console.log('Our names are the same length');
}

// CHALLENGE 2
// Types Challenge

/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

let myCar = {
    make: 'Honda',
    year: 2008,
    isUsed: true,
    owner: {
        name: 'Hannah',
        age: 29,
        isFinanced: false,
    }
}

console.log(typeof myCar.owner.age);

/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

if (typeof myCar.make === 'string') {
    console.log('String');
} else if (typeof myCar.make === 'boolean') {
    console.log('Boolean');
} else if (typeof myCar.make === 'number') {
    console.log('Number');
} else if (typeof myCar.make === 'object') {
    console.log('Object');
} else {
    console.log('What are you?!');
}
