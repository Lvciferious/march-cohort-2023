
/*
Debugging isSorted
This problem is worth 1 points.
You may receive partial credit.
Your friend is working on a function called isSorted() which checks if an array of numbers is in order,
sorted lowest to highest. Unfortunately, the code is not working correctly. Help them fix it!



function isSorted(nums) {

    // Loop through each number
    for (let i = 0 ; i < nums.length ; i++) {

        // Check if the current number is less than
        // the previous number
        if (nums[i-1] < nums[i]) {
            // If it's not, return false

            return false;

        }
    }

    // If every number is greater or equal to the previous number
    // in the array, it's sorted.
    return true;

}

isSorted([1, 2, 3, 4, 5])  // true
isSorted([2, 2, 4, 4])  // true
isSorted([1, 2, 4, 3, 5, 6,])  // false
*/
/*

String Changer
This problem is worth 1 points.
You may receive partial credit.
Build a function called stringChanger() that takes in two arguments: a word and an operation.
Based on the operation, your function will return the word modified in some way. The operations are:


"capitalize": Capitalize the first letter in the word.
"uppercase": Capitalize every letter in the word.
"double": Return the word twice in a row.
"reverse": Return the string with the letters in reverse order.
If the operation is invalid, return the word, unchanged.
This problem is worth 5 points. It is possible to get partial points on this problem.


//GAMEPLAN
//non-tech solution:
//take a word and alter it in several ways. Captialize first letter, capitalise whole word, repeat it, and reverse it.
//tech solution:
//if condish single pringle
//.toUpperCase and .slice or .split to capitalise - .slice works just fine!
// .reverse() it
//double concat
// else return word if invalid


function stringChanger(word, operation) {
    let one = word.charAt(0).toUpperCase() + word.slice(1);
    let two = word.toUpperCase();
    let three = word + word;
    let four = word.split('').reverse('').join('');
   {
    if (operation === "capitalize") return one;
    if (operation === "uppercase") return two;
    if (operation === "double") return three;
    if (operation === "reverse") return four;
    else return word;
}
}


console.log(stringChanger("foo", "capitalize"));
console.log(stringChanger("foo", "uppercase"));
console.log(stringChanger("foo", "double"));
console.log(stringChanger("foo", "reverse"));

console.log(stringChanger("foo", "unknown"));

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");
*/

/*
Most Expensive Groceries
This problem is worth 1 points.
You may receive partial credit.
You are compiling a price checker for a grocery store. The grocery prices are as follows:


butter: $1, eggs: $2, milk: $3, bread: $4, cheese: $5


First, create a function called costOfGroceries(groceries) which takes a single array of grocery items and returns the total cost.


Then, write a function mostExpensiveGroceries(groceriesList) that takes in a 2-dimensional array of grocery items
and returns the index of the sub-array with the highest cost.


This problem is worth 7 points. It is possible to get partial points on this problem.
*/

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

//GAMEPLAN:
//non-tech solution:
//calculate the total cost of several groceries lists. Afterwards, determine which of them is the most expensive.
//tech soltuion:
//Helper func
//1st func is helper func
//for x if OTP for both func
//return total cost
//return most expensive

/*
function costOfGroceries(groceries) {
    let totalCost = 0;

    for (let i = 0; i < groceries.length; i++) {
     let foods = groceries[i];

        if ('butter' === foods) {
            totalCost += 1;
        }
        if ('eggs' === foods) {
            totalCost += 2;
        }
        if ('milk' === foods) {
            totalCost += 3;
        }
        if ('bread' === foods) {
            totalCost += 4;
        }
        if ('cheese' === foods) {
            totalCost += 5;
        }
    }
    return totalCost;
}


function mostExpensiveGroceries(groceriesList) {
    let highest = -Infinity;
    let highestIndex = 0;

    for (let i = 0; i < groceriesList.length; i++) {
        const groceryList = groceriesList[i];
        const listCost = costOfGroceries(groceryList);

        if (listCost > highest) {
        highest = listCost;
        highestIndex = i;
        }
    }
    console.log(highestIndex);
    return highestIndex;

}



// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
*/
