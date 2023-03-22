/*

Max Value
Write a function maxValue(nums) that takes in an array of numbers as an arg.
The function should return the largest number of the array.
If the array is empty, the function should return null.

*/

//GAMEPLAN
//non-tech solution:
//pick the largest num out of a group of nums provided
//tech solution:
//for x if OTP
//.push() -not needed!
//array that shit - NVM didn't need it!
//ended up init a variable for null, so to get 'null' instead of 'undefined'

// your code here

function maxValue(nums) {
    let maxNum = null;

    for (let i = 0; i < nums.length; i++) {
        let max = nums[i]
        if (maxNum === null || max > maxNum) {
            maxNum = max;
        }
    }
    return maxNum;
};



console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3 ])); // 3
console.log(maxValue([])); // null
