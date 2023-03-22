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

//GAMEPLAN
//non-tech solution:
//take several lists of groceries and calculate the total cost of each list.
//then, compare the lists to see which one is the most expensive.
//tech solution:
//1st func is a helper function!
//array that shit
//for x if OTP that shit
//sum that shit
//return that shit
//2nd func uses the helper func!
//while loop that shit
//index that shit
//return that shit

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];


function costOfGroceries(groceries) {
    let cost = 0;

    for (let i = 0; i < groceries.length; i++) {
        const foods = groceries[i];
        if (foods === 'butter') {
            cost += 1;
        }
        if (foods === 'eggs') {
            cost += 2;
        }
        if (foods === 'milk') {
            cost += 3;
        }
        if (foods === 'bread') {
            cost += 4;
        }
        if (foods === 'cheese') {
            cost += 5;
        }

    }
    //console.log(cost);
    return cost;
}



function mostExpensiveGroceries(groceriesList) {
    let highest = -Infinity;
    let highestIndex = 0;

    for (let i = 0; i < groceriesList.length; i++) {
        let currentList = groceriesList[i];
        let listCost = costOfGroceries(currentList);

            if (listCost > highest) {
               highest = listCost;
               highestIndex = costOfGroceries(currentList);
            }
    }
    console.log(highestIndex);
    return highestIndex;
}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE
/*
const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];
*/

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
