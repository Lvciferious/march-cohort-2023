/*function createDictionary(words, translate) {
  const dictionary = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    dictionary[word] = translate(word);
  }
  return dictionary;
}

function questionMark(word) {
  return word + '?';
}

console.log(createDictionary(['hello', 'world'], questionMark));


const helloWorld = () => { hello: 'world' };

console.log(helloWorld());

function divisibleByTwo(num) {
  if (num === 2) return 1;
  debugger
  return 1 + divisibleByTwo(num / 2);
}

console.log(divisibleByTwo(16));


function eatPizza() {
  let pizza = 'Pepperoni!';
  if (true) {
    let pizza = 'Hawaiian';
  }
  debugger;
  return "Yummy!"
}

console.log(eatPizza());
*/

/*

Last Vowel

Write a function lastVowel(str) that takes in a string and returns the last vowel
that appears sequentially in the string. Note that the string may contain capitalization.

Hint: You may find the String.toLowerCase or String.toUpperCase methods useful


//GAMEPLAN
//non-tech solution:
//look through each letter of each word and point out the last sequential vowel.
//'y' does not count (['=), it's an invalid option.
//Tech solution:
//Use a for loop to iterate through a word.
//use .includes() to target vowels
//declare and assign a variable for the vowels
//if conditional to link with .includes()
//return last vowel of word
//if .includes doesnt work, stick w/ if and for. (IT WORKED NO NEED WHOO)
//make sure function skips over the other vowels to get to the LAST vowel!
//try a nested loop! NESTED LOOP LEAD ME IN A LOOP IT WAS A CODING RED HERRING

// your code here

function lastVowel(str) {
  const vowel = 'aiueo';
  // console.log(str);
   for (let i = str.length - 1; i >= 0; i--) {
       const letter = str[i];
       if (vowel.includes(letter.toLowerCase())) { //WATCH FOR PLACEMENT MISTAKES! The code wasn't working the first b/c you typed 'str.toLowerCase(), instead of letter.toLowerCase()!
       return letter;
       }
  }
  return null;
}



console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
*/

/*

Average of Four
Write a function averageOfFour(num1, num2, num3, num4) that takes in four numbers.
The function should return the average of all of the numbers.



function averageOfFour(num1, num2, num3, num4) {
  const sum = num1 + num2 + num3 + num4;
  let average = sum / 4;
  console.log(average);
  return average;
}

averageOfFour(10, 10, 15, 5); // 10
averageOfFour(3, 10, 11, 4); // 7
averageOfFour(1, 2, 3, 4); // 2.5


/*

Average of Two
Write a function averageOfTwo(num1, num2) that returns the
average of two numbers.



function averageOfTwo(num1, num2) {
  let sum = num1 + num2;
  let average = sum / 2;
  console.log(average);
  return average;
}

averageOfTwo(3, 7); // 5
averageOfTwo(16, 5); // 10.5
averageOfTwo(2, 7.5); // 4.75

/*
console.log(averageOfTwo(3, 7)); // => 5
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75


function calculator(operation, num1, num2) {
    if (operation === 'addition') return add(num1, num2);
    if (operation === 'subtraction') return sub(num1, num2);
    if (operation === 'multiplication') return multi(num1, num2);
    if (operation === 'division') return div(num1, num2);
    else return 'Invalid Operation';
  }

  function add(num1, num2) {
   return num1 + num2;
  }

  function sub(num1, num2) {
    return num1 - num2;
   }

   function multi(num1, num2) {
    return num1 * num2;
   }

   function div(num1, num2) {
    return num1 / num2;
   }



console.log(calculator('addition', 3, 9)); // 12
console.log(calculator('division', 3, 9)); // .3333
console.log(calculator('multiplication', 3, 9)); // 27
console.log(calculator('subtraction', 3, 9)); // -6
console.log(calculator('PIZZA', 3, 9)); // 'Invalid Operation'


function additionMutation(number, n) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

  }
}
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

//GAMEPLAN
//non-tech solution:
//add the total cost of several grocery lists. Then, among the total costs, select which is the most expensive.
//tech solution:
//for x if OTP that shit
//2 func (1 is a helper func)
//return total cost
//return most expensive

// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5
/*

function costOfGroceries(groceries) {
  let totalCost = 0;

  for (let i = 0; i < groceries.length; i++) {
     let food = groceries[i];

     if (food === 'butter') {
        totalCost += 1;
     }
     if (food === 'eggs') {
      totalCost += 2;
      }
    if (food === 'milk') {
      totalCost += 3;
    }
    if (food === 'bread') {
        totalCost += 4;
    }
    if (food === 'cheese') {
      totalCost += 5;
   }
  }
  return totalCost;
}


function mostExpensiveGroceries(groceriesList) {
  let highest = 0;
  let highestCost = 0;

  for (let i = 0; i < groceriesList.length; i++) {
    let currentList = groceriesList[i];
    let listCost = costOfGroceries(currentList);

    if(listCost > highest) {
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
*/


//function to take in single nums array and returns product
//function to take in 2d array w/ highest product value
// (values of all elements multiplied together)
//use getProdut as helper func in 2d array func to solve
//return highest product



/*
let totalProduct = [];

function getProduct(nums) {
  for (i = 0; i < nums.length; i++) {
    let product = nums[i];
    if (i === nums) return totalProduct
  }
    console.log(nums);
}

function highestProduct(numsList) {
    // Your code here
}
*/

/*
function getProduct(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        const product = nums[i];
        if(nums === i) {
            total * nums
        }
    }
    console.log(nums);
        return total;

}

function highestProduct(numsList) {
    let highest = -Infinity;
    let highestIndex = 0;

    for(let i = 0; i < numsList.length; i++) {
        let numList = numsList[i];
        let productList = getProduct(numList);
        if (productList > highest) {
            highest = productList;
            highestIndex = i
        }
    }
    console.log(highestIndex);
    return highestIndex;
}

/*
function mostExpensiveGroceries(groceriesList) {
    let highest = -Infinity;
    let highestIndex = 0;

    for(let i = 0; i < groceriesList.length; i++) {
        const groceryList = groceriesList[i];
        const costOfList = costOfGroceries(groceryList);
        if (costOfList > highest) {
            highest = costOfList;
            highestIndex = i
        }
    }
    console.log(highestIndex);
    return highestIndex;
}



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
/*



I GET IS NOW!!

Below are the arrays that we would nomally define in order to the start the process
nums CONTAINS THE ARRAY being passed to the function
Once we enter it into the console.log, nums becomes the ARGUMENT by which we pass the array into
the function PARAMETER (groceries)
This is where the FOR LOOP comes in! Once the arg is passed, we can start iterating
through the array elements ('cheese', 'butter', 'eggs', etc.)!


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

//function to take in single nums array and returns product
//function to take in 2d array w/ highest product value
// (values of all elements multiplied together)
//use getProdut as helper func in 2d array func to solve
//return highest product
/*

Highest Product
This problem is worth 7 points.
You may receive partial credit.
 First, create a function called getProduct(nums) which takes a
single array of numbers and returns the product.

Then, write a function highestProduct(numsList) that takes in a 2-dimensional
array of numbers and returns the index of the sub-array with
the highest product value (the value of all of the elements multiplied
together). Hint: You may use the getProduct function as a helper function in
the highestProduct function to solve the problem.
*/

//GAMEPLAN
//non-tech solution:
//sum the numbers of several lists. Then return the product list with the highest number among them.
//tech solution:
//for x if OTP BOIIIIIII
//helper func
//two func total
//return total products
//return highest product

function getProduct(nums) {
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
   let arr = nums[i];
      product *= arr;
  }
  console.log(product);
  return product;
}

function highestProduct(numsList) {
  let highest = -Infinity;
  let highProduct = 0;

  for (let i = 0; i < numsList.length; i++) {
    let currentList = numsList[i];
    let productList = getProduct(currentList);

    if(productList > highest) {
      highest = productList;
      highProduct = i;
    }
  }
  //console.log(highProduct);
  return highProduct;
}




// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5]; // 120
const arrayB = [3, 7]; // 21
const arrayC = [20, 100, 1, 2]; // 4000
const arrayD = [1, 3, 2, 300]; // 1800

let score = 0;

if (getProduct(arrayA) === 120) score++;
if (getProduct(arrayB) === 21) score++;
if (getProduct(arrayC) === 4000) score++;
if (getProduct(arrayD) === 1800) score++;

if (highestProduct([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestProduct([arrayA, arrayB]) === 0) score++;
if (highestProduct([arrayA, arrayD]) === 1) score++;


console.log("You have scored " + score + "/7 points.");
