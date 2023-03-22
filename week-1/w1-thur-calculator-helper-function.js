
function calculator(operation, num1, num2) {
    if (operation === 'addition') return add(num1, num2);
    if (operation === 'subtraction') return sub(num1, num2);
    if (operation === 'multiplication') return multi(num1, num2);
    if (operation === 'division') return div(num1, num2);
    else return 'Invalid Operation';
  }

  function add(num1, num2) {
   return num1 + num2;
  }

  function sub(num1, num2) {
    return num1 - num2;
   }

   function multi(num1, num2) {
    return num1 * num2;
   }

   function div(num1, num2) {
    return num1 / num2;
   }



console.log(calculator('addition', 3, 9)); // 12
console.log(calculator('division', 3, 9)); // .3333
console.log(calculator('multiplication', 3, 9)); // 27
console.log(calculator('subtraction', 3, 9)); // -6
console.log(calculator('PIZZA', 3, 9)); // 'Invalid Operation'
