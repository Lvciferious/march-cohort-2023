/*

Dot vs Bracket Notation
Given the object below, print out the values corresponding to each key
individually. Try using both dot and bracket notation where they're appropriate.

*/

//bracket notation
const obj = {
    "first key": "1",
    second: 2,
    "third_key": "three"
}

console.log(obj["first key"]);
console.log(obj["second"]);
console.log(obj["third_key"])

//dot notation

const obj2 = {
    "first key": "1",
    second: 2,
    "third_key": "three"
}


console.log(obj2.second);
//because of the space, we cannot use dot notation for 'first key'
console.log(obj2.third_key)