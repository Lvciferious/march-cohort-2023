/*

Cat Builder
Write a function catBuilder(name, color, toys) that returns a cat object object with the corresponding properties.

*/

//GAMEPLAN
//non-tech solution:
//welcome to Build-A-Cat! Give them a name, fur colour, and toys to play with!
//tech solution:
//an obj (bracket notation first, dot notation for extra credit) -didn't need to specify
//return obj

function catBuilder(name, color, toys) {
    let catObj = {
      name: name, color: color, toys:toys
    };
    return catObj;
  }

  console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
  // prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

  console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
  // prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
