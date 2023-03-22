/*

Calculator
This problem is worth 5 points.
You may receive partial credit.
Build a calculator function that takes in three arguments: num1, operator,
and num2. Each number will be an integer and the operator will be +, -,
* or /. Your function will perform the calculations between the two
numbers and return the answer.


//GAMEPLAN
//tech-solution:
//if sigle pringle
//two func
//first is helper func
//2nd keys in helper func
//return result based on operation


function calculator(num1, operator, num2) {
    if (operator === '+') return add(num1, num2)
    if (operator === '-') return sub(num1, num2)
    if (operator === '*') return multi(num1, num2)
    if (operator === '/') return div(num1, num2)
    else return "Invalid Operator";
}

function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function multi(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (calculator(123, "+", 456) === 579) score++;
if (calculator(987, "-", 654) === 333) score++;
if (calculator( 99, "*",   3) === 297) score++;
if (calculator(111, "/",   3) ===  37) score++;

if (calculator( 42, "?", 42) === "Invalid Operator") score++;

console.log("You have scored " + score + "/5 points.");
*/

/*
Debugging evenNumbersBelow
This problem is worth 4 points.
You may receive partial credit.
Your friend is working on a function called evenNumbersBelow() which returns an array
containing all even integers below than that number, ordered from lowest to highest.
Zero is considered positive. Unfortunately, the code is not working correctly. Help them fix it!



function evenNumbersBelow(num) {
    let arr = [];
    for (let i = 0 ; i < num ; i += 2) {
        arr.push(i);
    }
    return arr;
}

// Expected return values
console.log(evenNumbersBelow(0)); // []
console.log(evenNumbersBelow(6)); // [0, 2, 4]
console.log(evenNumbersBelow(7)); // [0, 2, 4, 6]
console.log(evenNumbersBelow(8)); // [0, 2, 4, 6]

 SCORING: DO NOT MODIFY ANYTHING BELOW THIS LINE
let score = 0;

const arrComparison = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let i = 0;
  while (i < arr1.length) {
    if (arr1[i] !== arr2[i]) return false;
    i++;
  }
  return true;
}

if (arrComparison(evenNumbersBelow(0), [])) score++;
if (arrComparison(evenNumbersBelow(6), [0, 2, 4])) score++;
if (arrComparison(evenNumbersBelow(7), [0, 2, 4, 6])) score++;
if (arrComparison(evenNumbersBelow(8),  [0, 2, 4, 6])) score++;

console.log("You have scored " + score + "/4 points.");
*/

/*
Highest Average
This problem is worth 7 points.
You may receive partial credit.

First, create a function called getAverage(nums) which takes a single array
of numbers and returns the average.


Then, write a function highestAverage(numsList) that takes in a
2-dimensional array of numbers and returns the index of the sub-array with the
highest average value. Hint: You may use the getAverage function as a helper
function in the highestAverage function to solve the problem.
*/

//GAMEPLAN
//non-tech solution:
//add groups of nums together, then average them. Pick the highest average among them.
//tech-solution:
//for x if OTP
//two func
//1st is a helper func
//return avg
//return highest avg


function getAverage(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i += 1) {
        let num = nums[i];
        sum += num;
    }
    let avg = sum / nums.length;
    //console.log(avg);
    return avg;
}


function highestAverage(numsList) {
    let highest = 0;
    let highestAvg = 0;

    for (let i = 0; i < numsList.length; i++) {
        let currentAvg = numsList[i];
        let averages = getAverage(currentAvg);
            if (averages > highest) {
                highest = averages;
                highestAvg = i;
            }
        }
        console.log(highestAvg);
        return highestAvg;
    }



// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [10000, -9998];
const arrayC = [2, 100, 55, 19];
const arrayD = [4, 8, 12];

let score = 0;

if (getAverage(arrayA) === 3) score++;
if (getAverage(arrayB) === 1) score++;
if (getAverage(arrayC) === 44) score++;
if (getAverage(arrayD) === 8) score++;

if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestAverage([arrayA, arrayB]) === 0) score++;
if (highestAverage([arrayA, arrayD]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
