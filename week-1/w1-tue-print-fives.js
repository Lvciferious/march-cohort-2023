/*

Print Fives
Write a function printFives(max) that prints out the multiples of 5 that are less than max.
Try to solve this in two ways, one using
an if statement, and one without.

*/

function printFives(max) {

    for (let i = 0; i < max; i += 1) {
        if (i % 5 === 0)
        console.log(i);
    }
}
// Example:

printFives(20) // prints out:
0
5
10
15

function printFives(max) {

    for (let i = 0; i < max; i += 5) {
        console.log(i);
    }
}


printFives(20) // prints out:
0
5
10
15
