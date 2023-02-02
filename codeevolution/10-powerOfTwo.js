// give a posotive integer 'n', determine if the number is a power of 2 or not
// an integer is a power of two if there exist an integer 'x' such that 'n' ==== 2^x

function isPowerOfTwo(n) {
  return 2 ** Math.log2(n) === n;
}

console.log('2', isPowerOfTwo(2)); //true
console.log('4', isPowerOfTwo(4)); //true
console.log('8', isPowerOfTwo(8)); //true
console.log('16', isPowerOfTwo(16)); //true
console.log('32', isPowerOfTwo(32)); //true
console.log('1024', isPowerOfTwo(1024)); //true
console.log('-----------');
console.log('1', isPowerOfTwo(1)); //true
console.log('3', isPowerOfTwo(3)); //true
console.log('5', isPowerOfTwo(5)); //false
console.log('7', isPowerOfTwo(7)); //true
console.log('9', isPowerOfTwo(9)); //false
