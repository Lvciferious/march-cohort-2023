/*

Delete Keys/Values
Given the object below, delete the key-value pair such that "{}" is printed
when printing the object.

*/

const obj = {
    first: "1"
}

delete obj.first

console.log(obj);               // {}