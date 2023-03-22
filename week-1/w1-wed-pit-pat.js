/*

Pit Pat
Write a function pitPat(max) that accepts a number as an arg.
The function should return an array containing all positive numbers
less than or equal to max that are divisible by either 4 or 6, but not both.

*/

//GAMEPLAN
//from a group of nums, pick out all nums divisible by 4 OR 6 (not both). Stop at the highest num.
//tech solution:
//array that shit
//for x if OTP
//modulo
//num as arg in clg
//try .push()

// your code here

function pitPat(max) {
    let arr = [];
     for (let i = 1; i <= max; i++) {
         if ((i % 4 === 0 || i % 6 === 0) && i % 12 !== 0) {
             arr.push(i);
         }
     }
     return arr;
 }


 console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
 console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
 console.log(pitPat(72));
