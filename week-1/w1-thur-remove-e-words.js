/*

Remove E Words
Write a function removeEWords(sentence) that accepts a sentence string as an arg.
The function should return a new string, containing only the words that don't have the letter "e" in them.

*/

//GAMEPLAN
//non-tech solution:
//death to all e words!!!! jk lol
//tech solution:
//for x if OTP
//init 'e' w/ variable (didn't need to do that, but still used 'e' in .includes())
// .includes bbyyyyyy ('!' came in handy!!!)
//forgot to array that shit
//.push() ended up being useful
//actually used .split!
//.toLowerCase came in handy thistime WAT

// your code here


function removeEWords(sentence){
    let word = sentence.split(' ');
    let noEwords = [];

    for (let i = 0; i < word.length; i++) {
       let letter = word[i];
       if (!letter.toLowerCase().includes('e')) {
            noEwords.push(letter);
       }
    }
    return noEwords.join(' ');
}


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
