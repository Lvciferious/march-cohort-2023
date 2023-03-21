/*

Using Object.keys II
Given the object below, use Object.keys() to iterate through the object and
print the value if there are 3 or more "e"s shared between the key and value.

*/

//GAMEPLAN
//for x if OTP (for of loop / for in loop)
//print values w/ thred or more'e's only

const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

// Write your solution here.
let helper = (key, val) => {
let eCount = 0;

    for (let i = 0; i < key.length; i++) {
       if (key[i] === 'e' || key[i] === 'E') eCount += 1;
    }
    for (let i = 0; i < val.length; i++) {
       if (val[i] === 'e' || val[i] === 'E') eCount += 1;
    }
    return eCount >= 3;
}

for (const key in obj) {
    if (helper(key, obj[key]))
    console.log(obj[key]);
}
// Should print "hexagon"


console.log(obj);