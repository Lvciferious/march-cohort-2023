/*

Avg Val
Write a function avgVal(arr) that accepts an array as an arg.
The function should return the average of all values in the array.
If the array is empty, it should return null.

*/

//GAMEPLAN
//tech solution:
//array that shit
//for x if OTP
//addition, division operators
//OOOH maybe helper func? or a nested loop?

// your code here



//GAMEPLAN
//tech solution:
//array that shit
//for x if OTP
//addition, division operators
//OOOH maybe helper func? or a nested loop?

// your code here


function avgVal(arr) {
    if (arr.length === 0) return null;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let valSum = arr[i];
        sum += valSum;
    }
    return sum / arr.length;
};


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
