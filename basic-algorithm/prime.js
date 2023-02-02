function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log('1', isPrime(1));
console.log('5', isPrime(5));
console.log('4', isPrime(4));
