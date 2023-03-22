/*

Long Words
Write a function longWords(words) that takes in an array of words.
The function should return an array containing only the words that are longer than 5 characters.

*/

//GAMEPLAN
//non-tech solution:
//pick the longest words out of a group of the words provided
//tech-solution:
//array that shit
//for loop single pringle? If not OTP for life BOIIIII
//maybe .push()

// your code here

function longWords(words) {
    let arr = [];
    for (let i = 0; i < words.length; i++) {
        let long = words[i];
        if (long.length > 5) {
            arr.push(long);
        }

    }
    return arr;
};





console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
