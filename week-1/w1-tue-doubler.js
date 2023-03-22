/*

Doubler
Write a function doubler(numbers) that takes an array of numbers and returns a new array
where every element of the original array is multiplied by 2.

*/

function doubler(arrayNum) {
    let doubleArr = [];

    for (let i = 0; i < arrayNum.length; i += 1) {
        let oldArr = arrayNum[i];
        let newArr = oldArr * 2;
        doubleArr = doubleArr.concat(newArr);

    }
    return doubleArr;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
