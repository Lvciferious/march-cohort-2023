/*

Lucky Numbers (*)
Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky numbers in any order.
A lucky number is the minimum element in its row and the maximum in its column.

*/

//GAMEPLAN
//non-tech solution:
//pick out a lucky num from the nums provided!
//tech solution:
//nested arrays
//for x if OTP (?)
//array that shit

//function luckyNumbers(matrix) {
/*
     let arr = [];
   // let maxColumn = [];

    for (let i = 0; i <= matrix.length; i++) {
      let arr1 = matrix[i];
      for (let j = 0; j < matrix.length; j++) {
       // const arr2 = martrix[j];
        arr1.push(i)
      }


    }return arr;
*/
/*
function minRow(arr) {
  for(let i = 0; i < arr.length; i++){
   let lowNum = arr[i];
    if(lowNum < arr[i]){
      lowNum += arr[i]
       return lowNum;
    }
  }
 }

/*
    for (let i = minRow; i = maxColumn; i++) {
     // console.log('break');
      if (luckyNum === minRow && maxColumn) {
      return luckyNum;
      }
    }
    //console.log('break');
//}




  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]

  console.log(matrix); // [12]

  matrix = [[ 5, 10,  8,  6],
            [10,  2,  7,  9],
            [21, 15, 19, 10]]

  console.log(luckyNumbers(matrix)); // [10]
*/

//non-tech solution:
//take a group of nums and determine the smallest num in its row/biggest in its colummn.
//if smallest/biggest return that num (that's the lucky num)

//function luckyNumbers(matrix) {

function minRow(arr) {
  for(let i = 0; i < arr.length; i++){
    let sub1 = arr[i];
    for (let j = 1; j < sub1.length; j++) {
      let sub2 = arr[j]
      if (i < j) {
      //sub1.push(sub2);
      console.log(sub2);

    }
   let lowNum = arr[j];
    if(lowNum < arr[i]){
      lowNum += arr[i]
       return lowNum;

    }
  }
 }
}



  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]

  console.log(matrix); // [12]
