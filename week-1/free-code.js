function costOfGroceries(groceries) {
    let totalCost = 0;

    for (let i = 0; i < groceries.length; i++) {
        let foods = groceries[i];

        if (foods === 'butter') {
            totalCost += 1;
        }
        if (foods === 'eggs') {
            totalCost += 2;
        }
        if (foods === 'milk') {
            totalCost += 3;
        }
        if (foods === 'bread') {
            totalCost += 4;
        }
        if (foods === 'cheese') {
            totalCost += 5;
        }
    }
    //console.log(totalCost);
    return totalCost;
}

function mostExpensiveGroceries(groceriesList) {
    let highest = 0;
    let highestCost = 0;

    for (let i = 0; i < groceriesList.length; i++) {
       let currentList = groceriesList[i];
       let listCost = costOfGroceries(currentList)

       if (listCost > highest) {
        highest = listCost;
        highestCost = i;
       }
    }
    console.log(highestCost);
    return highestCost;
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


/*
// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [3, 7];
const arrayC = [20, 100, 1, 2];
const arrayD = [1, 3, 2, 300];

let score = 0;

if (getProduct(arrayA) === 120) score++;
if (getProduct(arrayB) === 21) score++;
if (getProduct(arrayC) === 4000) score++;
if (getProduct(arrayD) === 1800) score++;

if (highestProduct([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestProduct([arrayA, arrayB]) === 0) score++;
if (highestProduct([arrayA, arrayD]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
*/
