/*

Last Vowel
Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string.
Note that the string may contain capitalization.

Hint: You may find the String.toLowerCase or String.toUpperCase methods useful

*/

//GAMEPLAN
//non-tech solution:
//look at a word and note how many vowels are in the word. List whatever is the last vowel of that word.
//tech-solution:
//for x if OTP
//maybe a .includes()
//declare a var for the vowels
//return vowel
//use toUpper or toLower to account for capitalisation - refactored in order to not need it!

// your code here
let vowels = 'aiueoAIUEO';

function lastVowel(str) {
    for (let i = str.length - 1; i >= 0 ; i--) {
        let letter = str[i];
        if (vowels.includes(letter)) {
            return letter;

        }
    }
    return null;
}


console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
