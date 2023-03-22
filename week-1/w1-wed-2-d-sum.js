/*

Two Dimensional Sum
Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.

*/

//GAMEPLAN
//non-tech solution:
//look at a group of numbers and add them all together.
//tech solution:
//nested for loops bbyyyyyyy
//probably a .push in there somewhere - did not need it, but sum += was needed!

// your code here
function twoDimensionalSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr[i];

        for (let j = 0; j < arr1.length; j++) {
            sum += arr1[j];
        }
    }
    return sum;
}



let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
