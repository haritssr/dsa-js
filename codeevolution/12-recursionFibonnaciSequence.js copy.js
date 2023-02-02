/*
 O(2^n)
*/
function recursiveFibonacci(n) {
  // return 0, if n = 0
  // return 1, if n = 1
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); //0
console.log(recursiveFibonacci(2)); //1
console.log(recursiveFibonacci(6)); //8

//iterative solution more faster -- O(n)
