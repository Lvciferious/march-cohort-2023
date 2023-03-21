/*

console.log('run'[-1]);

console.log('run'['run'.length - 1]);

console.log('run'[3]);

console.log('bootcamp'.indexOf('x'));

console.log('bootcamp'.indexOf('t'));

console.log('run'.length);

console.log('run'[2]);

console.log('bootcamp'.indexOf('o'));

console.log('bootcamp'.indexOf('camp'));



function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  console.log(addThreeNumbers(1, 2)); // => ???

  

  function isDivisibleByHundred(num) {
    return num % 100 === 0;
  }

  console.log(isDivisibleByHundred(225));



  let x = 1;
let y = 2;
console.log(x * 3 / y + 7 % 4);



let arr1 = [1, 2, 3];
let arr2 = [7, 8, 9];

for (let i = 0; i < 4; i++) {
  for (let j = 2; j < arr2.length; j++) {
    console.log(arr1[i]);
    console.log(arr2[j]);
  }
  console.log('break');
}


let array1 = [1, 2, 3];

let array2 = array1;

array2.push(4);

console.log(array1); // => ????


let obj = { color: "Red", fruit: "tomato" };
let { apple } = obj;

console.log(apple); // => ???


let object = { game: { name: "Boggle", rating: "10" } };

let {
  game: { rating }
} = object;

console.log(rating); // => ???



let foods = ["apple", "potato"];

let [firstEl, secondEl] = foods;

console.log(firstEl); //=> ???


let obj = { color: "Red", fruit: "tomato" };
let { fruit } = obj;

console.log(fruit); // => ???



let obj = { name: "Crystal", traits: ["mammal", "dog"] };
let { traits, name } = obj;

console.log(traits); // => ???



let obj = { color: "Red", fruit: "tomato" };
let { apple } = obj;

console.log(apple); // => ???


let bar = function() {
  console.log("Ramen");
};

let foo = function(cb) {
  console.log("Gazpacho");
  cb();
  console.log("Egusi");
};

console.log("Bisque");
foo(bar);
console.log("Pho");


let bar = function() {
  console.log("Arches");
};

let foo = function() {
  console.log("Everglades");
  bar();
  console.log("Sequoia");
};

console.log("Zion");
foo();
console.log("Acadia");


let bar = function(s) {
  return s.toLowerCase() + "...";
};

let foo = function(message, cb1, cb2) {
  console.log(cb1(message));
  console.log(cb2(message));
};

foo("Hey Programmers", bar, function(s) {
  return s.toUpperCase() + "!";
});


let foo = function() {
  console.log("hello");
  return 42;
};

foo;


let foo = function() {
  console.log("Everglades");
  console.log("Sequoia");
};

console.log("Zion");
foo();
console.log("Acadia");


let foo = function(n, cb) {
  console.log("vroom");
  for (let i = 0; i < n; i++) {
    cb();
  }
  console.log("skrrt");
};

foo(2, function() {
  console.log("swoosh");
});


let foo = function() {
  console.log("hello");
  return 42;
};

console.log(foo);
*/

// function foo() {
//   console.log("fizz");
// }

// function bar() {
//   console.log("buzz");
// }

// function boom(cb1, cb2) {
//   console.log("zip");
//   cb1();
//   console.log("zap");
//   cb2();
//   console.log("zoop");
// }

// boom(bar, foo);

// let foo = function() {
//   console.log("hello");
//   return 42;
// };

// console.log(foo);

// let foo = function() {
//   console.log("hello");
//   return 42;
// };

// foo;

// let arr = [1, 1, 3, 2, 2, 1];

// const result = arr.reduce(function(acc, value) {
//   if (acc[value]) {
//     acc[value]++;
//   } else {
//     acc[value] = 1;
//   }
//   return acc;
// }, {});

// console.log(arr);

const func1 = function(cb) {
  console.log(cb('Func 1'));
  return 'Func 1';
}

function func2(cb) {
  func1(function(arg) {
    return "Callback to " + arg;
  });
  return 'Func 2';
}

console.log(func2());