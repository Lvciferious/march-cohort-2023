/*

Writing Object Methods
Given an object, obj, declare a method, printValues on obj that prints
all unique values within the object.

*/

//for x if OTP - ended up using for of

const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

obj.printUniqueValues = function() {
    let unique = [];

    for (let val of Object.values(obj)) {
        if (!unique.includes(val) && typeof val != 'function') unique.push(val);
    }
    for (let val of unique) {
        console.log(val);
    }
}

obj.printUniqueValues();               // Honda Kia Mercedes BMW
