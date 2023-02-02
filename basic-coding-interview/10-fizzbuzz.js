for (let i = 0; i <= 20; i++) {
  if (i === 0) {
    console.log(0);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, `FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(i, `Fizz`);
  } else if (i % 5 === 0) {
    console.log(i, `Buzz`);
  } else {
    console.log(i);
  }
}

console.log('----------------------------');

for (let i = 1; i <= 20; i++) {
  let f = i % 3 === 0,
    b = i % 5 === 0;
  console.log(f ? (b ? `${i} FizzBuzz` : `${i} Fizz`) : b ? `${i} Buzz` : i);
}

console.log('----------------------------');

for (let i = 1; i <= 20; i++) {
  let f = i % 3 === 0,
    b = i % 5 === 0;
  console.log(f ? (b ? `${i} FizzBuzz` : `${i} Fizz`) : b ? `${i} Buzz` : i);
}
