/**
 * @param {number} number
 * @return {number}
 */

function factorialRecursive(number) {
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

console.log(factorialRecursive(0));
console.log(factorialRecursive(1));
console.log(factorialRecursive(2));
console.log(factorialRecursive(3));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));
console.log(factorialRecursive(8));
console.log(factorialRecursive(10));
