//O(logn)
function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    // O(logn)
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

/*
Big-O guide

loop - O(n)
nested loops - O(n^2)
input size reduced by half - O(logn)

*/

//O(1)
function isPowerOfTwoBitWise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
