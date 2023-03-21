/*

Using Object.values
Write a function that accepts and object, obj, and uses Object.values
to print all values in the object.

*/
//for loop

const obj = {
    first: "1",
    second: 2,
    third: "three"
}


const printValues = obj => {
    let values = Object.values(obj)
    for (let value of values) {
        console.log(value);
    }


}

console.log(printValues(obj));       // "1", 2, "three" (not apparent in terminal, but the 1 would be a string)
