/*

Remove Last Vowel
Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.

*/

//GAMEPLAN
//non-tech solution:
//take a word and rewrite the word with the last vowel removed
//tech solution:
//for loop x if OTP
//probably .slice and .splice(), or maybe .pop() - no pop/splice, but YES on .slice!
//decrement not increment
//initialise var for vowels
//.includes

// your code here

function removeLastVowel(word) {
    let vowels = 'aiueoAIUEO'
    for (let i = word.length - 1; i >= 0; i--) {
        let letter = word[i];
        if (vowels.includes(letter)) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}



console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
