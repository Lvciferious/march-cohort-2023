/*

Even Numbers
Write a function evenNumbers(max) that takes in a number as an arg.
The function should return an array containing all positive, even numbers that are less than max.

Define this function using function expression syntax.

*/

//GAMEPLAN
//non-tech solution:
//list all even numbers that are less than the provided num
//tech solution:
//for loop (maybe OTP) - YAAASSS OTP
//return array
//iterate += 2 (?) - not needed
//stop before num (no .length needed)
//return array of even nums ONLY
// .push() you saved my ass again!

// your code here

function evenNumbers(max) {
   let even = [];
    for (let i = 1; i < max; i ++) {
       // let even = max[i];
        if (i % 2 === 0) {
            even.push(i);
        }
    }
        return even;
}





console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
