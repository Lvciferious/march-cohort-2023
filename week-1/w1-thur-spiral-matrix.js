/*

Spiral Matrix (*)
Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the elements in spiral order.

*/

//GAMEPLAN
//HOLY SHIT I GET IT NOW YOU'RE NOT ORDERING THE NUMS IN A SPIRAL
//YOU'RE SIMPLY MOVING IN A SPIRAL AROUND THE ARRAY
//THAT'S WHY THE SPIRAL IS NON-SEQUENTIAL
//non-tech solution:
//reorder a group of letters in a spiral
//tech solution:
//hoenstly this has me strumped so I'm looking up tutorials
//HAAAAA FUCK YOU SPIRAL MATRIX AGENT-SMITH-ARCHITECT-LOOKING HEAD-ASS

/*
COMPREHENSION CHECK:

What is happening in this code?

HOOO BOI. So let's break it down  in order, like js does.
Before we even think of attempting the spiral, we needed to define a bunch of variables.
We needed to define what the matrix is (LOL), and the directions we need to go in order to execute the spiral.

First, we init a variable of an empty array. This is what we will return to get the spiral to show in the clg.
Then, we init the directions AND their positionings in the matrix. These are what we use to direct the spiral itself.
We set let and top at 0, bc those are the points where wec switch up the flow of the spiral.
Right is set to matrix[0].length-1, bc it takes the index (at 0) and moves tothe vary end of the array (which is -1).
Bottom does a similar thing, only it relies purely in the end lengtgh of the array.
We set dir to 'right' as a general placeholder of the following if conditionals.

Next step, we create a while loop. This honestly feels a better option, since we don't know how long the spiral is meant to go for.
The while loop has its conditions laid out: left must be less than/equal to right AND top must be less than/equal to bottom
to enter the loop.

Next is the nitty gritty part. Inside the while loop, we set up four pairs on for x if OTP's.
This is where the magic happens! Depending on the direction you input for the 'if' condish, the 'spiral' will act a certain way.

Dir right: inside the following for loop, i is set to left. As long as left is less than/equal right, we add/equal 1,
then inside of the for loop we push whatever index is at the top of the spiral (i.e. I go frim left to right of the toop subarray [1,2,3]).
Once we reach the very end of the top subarray, then we switch the dir to down.

Dir down: the index for the loop becomes top, and as long as top is less/equal bottom iterate += 1.
This time you push matrix's index first, with the position right coming after.

More or less for the remaining 2 for x if combos, you adjust the for loops' index, the amount they iterate,
what they're pushing, and what the new direction will be after the for loop completes.

after all for x if parings are looped, you exit the while loop and return spiral.

TLDR; for this spiralOrder func, we take the matrix parameter and, after initialising several variables,
use for x if pairings nested inside a while loop to output the spiral martix in the console.

*/


function spiralOrder(matrix) {
    let spiral = [];
    let left = 0;
    let top = 0;
    let right = matrix[0].length-1;
    let bottom = matrix.length-1;
    let dir = 'right';

    while (left <= right && top <= bottom) {
        if (dir === 'right') {
            for (let i = left; i <= right; i += 1) {
                spiral.push(matrix[top][i]);
            }
            top += 1
            dir = 'down';
        }
        else if (dir === 'down') {
            for (let i = top; i <= bottom; i += 1) {
                spiral.push(matrix[i][right]);
            }
            right -= 1;
            dir = 'left';
        }
        else if (dir === 'left') {
        for (let i = right; i >= left; i -= 1) {
            spiral.push(matrix[bottom][i]);
        }
        bottom -= 1
        dir = 'up';
        }
        else if (dir === 'up') {
            for (let i = bottom; i >=top; i -= 1) {
                spiral.push(matrix[i][left]);
            }
            left += 1;
            dir = 'right';
        }
    }
    return spiral;
}


  matrix = [[ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9]]

  console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

  matrix = [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9,10,11,12]]


  console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
