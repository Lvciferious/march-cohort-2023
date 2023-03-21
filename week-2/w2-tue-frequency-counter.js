/*

Frequency Counter
Given a sentence string, sentence, write a function that returns the most
common character within the sentence. If there are multiple characters that
appear the most, return the lexicographically smallest one (e.g. if 'a' and 'b' are both the most common,
return 'a' because it is closest to the beginning of the alphabet). Be sure to exclude spaces when counting
characters.

*/

//GAMEPLAN
//non-tech solution:
//tally up all letters in the given sentence, and pick the most common character.
//tech-solution:
// for loop x OTP (maybe), maybe for in


const sentence = "What is the most common character in this sentence";

const mostCommonChar = sentence => {
    const counter = {};

    for (let l of sentence) {
        let letter = l.toLowerCase();
        if (!counter[letter]) {
            counter[letter] = 0 && counter[' '];
        }
        counter[letter]++
    }
    console.log(counter);

let maxKey;
let maxValue = 0;

for (let key in counter) {
    if (counter[key] > maxValue) {
        maxKey = key;
        maxValue = counter[key];
    }
    else if (counter[key] === maxValue && key < maxKey) {
        maxKey = key;
        maxValue = counter[key];
    }
}
return maxKey;
}


console.log(mostCommonChar(sentence));           //  "t"
