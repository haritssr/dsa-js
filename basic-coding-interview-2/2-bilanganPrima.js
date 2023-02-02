//carilah bilangan prima dari 1 sampai 100

//prime number is number greater than 1, it can only divide by 1 and itself

//2,3,5,7,11, 13, 17, 19

function printPrime(from, max) {
  let primeList = [];
  for (let i = from; i <= max; i++) {
    if (i > 1 && i % 1 === 0 && i % i === 0 && i % 2 !== 0 && i % 3 !== 0) {
      primeList.push(i);
    }
  }
  return [primeList];
}

const [primeList] = printPrime(1, 100);
const a = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
];
console.log('prime number from 1 to 100: ', primeList);
console.log(primeList.length);
console.log(a.length);
