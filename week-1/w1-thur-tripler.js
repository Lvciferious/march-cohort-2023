/*

Tripler
Write a function tripler(nums) that takes in an array as an arg.
The function should return a new array containing three times every number of the original array.

*/

//GAMEPLAN
//array that shit
//for loop single pringle

// your code here

function tripler(nums) {
    let tripleArr = [];

    for (let i = 0; i < nums.length; i += 1) {
        let oldArr = nums[i];
        let newArr = oldArr * 3;
        tripleArr = tripleArr.concat(newArr);

    }
    return tripleArr;
}





console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
