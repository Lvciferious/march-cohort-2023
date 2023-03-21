
/*

Using Object.keys I
Given the object below, use Object.keys() to iterate through the object and
print all its values.

*/


const obj = {
    first: "1",
    second: 2,
    third: "three"
}

// bracket notation only does not work with dot notation
let keys = Object.keys(obj)
    for (const key of keys) {
        console.log(obj[key]);
    }

    const obj2 = {
        first: "1",
        second: 2,
        third: "three"
    }

    console.log(obj);
