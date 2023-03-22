/*

Rotate Right
Write a function rotateRight(array, num) that takes in an array and a number as args.
The function should return a new array where the elements of the array are rotated to the right num times.
The function should not mutate the original array and instead return a new array.

Define this function using function expression syntax.

HINT: you can use Array's slice() method to create a copy of an array

*/

//GAMEPLAN
//non-tech solution:
//take a group of elements and rotate them to the right a set num of times.
//tech solution:
// .slice() that shit - YEAAAAHHH BOIIIIIII
// maybe .shift or .unshift to return new array -UNSHIFT YEEEEEAAAAAH BOIIIIIII
//might not need for x if, but we'll see
//turns out .pop() was also useful! makes sense, considering that we're returning a new array

// your code here


function rotateRight(array, num) {
    let rotate = array.slice();
    for (let i = 0; i < num; i++) {
        const el = rotate.pop();
        rotate.unshift(el)
    }
    return rotate;
}



let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
