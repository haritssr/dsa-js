/**
 * By Codeevolution
 * Give a number 'n', find the first 'n' elements of the Fibonnaci sequence
 * @param {number} - the amount of set (the length of the array)
 * The minimal number of sequence to build the fibonnaci sequence is two, which 0 and 1, because the definition of fibonnaci are positive integer
 */

function fibonnaci(number) {
  let fib = [0, 1];
  for (let i = 2; i < number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}


console.log(fibonnaci(2)); // [0,1]
console.log(fibonnaci(3)); // [0,1,2]
console.log(fibonnaci(4)); // [0,1,1,2]
console.log(fibonnaci(8)); // [0,1,1,2,3,5,8,13]
