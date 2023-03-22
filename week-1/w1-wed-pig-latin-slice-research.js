/*

Pig Latin - Slice Research
Pig Latin is a fun take on the English language where you move any consonant cluster
from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin.
For this problem use the String's slice() method. The slice() method extracts a section of a string and returns it as a string.

Hint: Remember the String.includes method!
*/




function pigLatinWord(word) {
    let vowels = 'aeiou';
    if (vowels.includes(word[0])) {
    return word + 'yay';
    }
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (vowels.includes(letter)) {
            let firstPart = word.slice(i);
            let secondPart = word.slice(0, 1);
            return firstPart + secondPart + 'ay';
        }

    }
}

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

/*

function pigLatinWord(word) {
    let vowels = "aeiou";
    let letter = word[0];

      if(vowels.includes(letter)){
        return word + 'yay';
      }
         for(let i = 1; i < word.length; i++){
           letter = word[i];
           if(vowels.includes(letter)) {
             let beginning = word.slice(0, i);
             let end = word.slice(i);
             return end + beginning + "ay";
      }
    }
  };

  console.log(pigLatinWord("apple")); //=> "appleyay"
  console.log(pigLatinWord("eat")); //=> "eatyay"
  console.log(pigLatinWord("banana")); //=> "ananabay"
  console.log(pigLatinWord("trash")); //=> "ashtray"
*/
