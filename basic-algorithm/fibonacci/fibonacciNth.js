function fibonacciNth(n) {
  let c = 1;
  p = 0;
  if (n === 1) return 1;
  let ic = n - 1;
  while (ic) {
    c += p;
    p = c - p;
    ic -= 1;
  }
  return c;
}

console.log(fibonacciNth(1));
console.log(fibonacciNth(2));
console.log(fibonacciNth(10));
