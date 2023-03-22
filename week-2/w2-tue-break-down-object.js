/*

Break down object
Write a function breakDownObj(obj) that takes in an object as a parameter
and returns an array containing:  all the keys from the object and all the
values of the object.

*/

//GAMEPLAN
//non-tech solution:
//talk about your pet! Their name, age, where they're from, etc.
//tech solutiom:
//maybe a for of OR for in loop
//if not that, just console.log/return obj info

let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
let object2 = {location: 'NY', borough: 'Brooklyn'};

const breakDownObj = obj => {

  for (const info in obj) {
    let value = obj[info];
    console.log([info] + ', ' + [value]);    
    }
  };


console.log(breakDownObj(object1));          // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
console.log(breakDownObj(object2));          // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
