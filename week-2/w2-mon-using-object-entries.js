/*

Using Object.entries
Write a function that takes in an object that uses car owners' names as keys
and the car brand they own as values. The function should print the names of the owners
whose names are strictly longer than 5 characters and who own a "Honda".



Note: Use Object.entries to make your life easier!

*/

//for x if OTP

const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

const printOwners = obj => {
    let entries = Object.entries(obj)

    for (let entry of entries) {
        if (entry[0].length > 5 && entry[1] === 'Honda')
        console.log(entry[0]);
    }
}

console.log(printOwners(obj));               // Bradley
