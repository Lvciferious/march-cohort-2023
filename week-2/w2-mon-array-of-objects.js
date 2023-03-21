/*

Array of Objects
In this practice, you will practice navigating objects that are nested within
an array. Given the below array, write a function printNames that prints the
name of every object

*/

//GAMEPLAN
//for loop single pringle

const users = [
    {
        name: "Gerald",
        age: 23,
        height: 68
    },
    {
        name: "Winnie",
        age: 35,
        height: 62
    },
    {
        name: "Peter",
        age: 61,
        height: 72
    }
]
//bracket notation
const printNames = users => {
    // Write your solution here.
    for (let i = 0; i < users.length; i++) {
        let currentName = users[i];
        console.log(currentName['name']);

    }
}

printNames(users)                   // Gerald Winnie Peter


//dot notation
const printNames2 = users2 => {
    // Write your solution here.
    for (let i = 0; i < users2.length; i++) {
        let currentName2 = users2[i];
        console.log(currentName2.name);

    }
}

printNames(users)                   // Gerald Winnie Peter
