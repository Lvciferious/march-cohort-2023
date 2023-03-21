/*

Check if key is in object
Write a function includedInObject that accepts an object, obj, and a key
and returns true if that key exists on the object or false otherwise.

*/


const obj = {
    first: "1",
    second: 2,
    third: "three"
}

const str = "first";

const variableAsKey = (obj, str) => {
    console.log(obj[str]);
    return obj[str];
}

variableAsKey(obj, str);                // "1" (looks like 1 in terminal)
variableAsKey(obj, "second");           // 2