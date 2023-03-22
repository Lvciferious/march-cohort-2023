/*

Factors Of
Write a function factorsOf(num) that takes in a number as an arg.
The method should return an array containing all positive numbers that are able to divide into num with no remainder.

Define this function using function expression syntax.

*/

//GAMEPLAN
//non-tech: take a positve number and list all factors (when divided into the num, must return 0)
//tech solution:
//for loop x If condish OTP
//multiply operation (ended up using mod instead)
//must return array of factors
//keep forgettinf .push()! lol

// your code here

function factorsOf(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0)
        arr.push(i);
    }
    return arr;
}


console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]
