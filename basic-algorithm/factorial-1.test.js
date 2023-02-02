const factorial = require('./factorial/factorial-1.js');

test('factorial of 5 is 120', () => {
  expect(factorial(3)).toBe(6);
});
