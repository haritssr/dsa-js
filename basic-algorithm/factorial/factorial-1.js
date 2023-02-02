/**
 * By threkleb
 * @param {number} number
 * @return {number}
 */

function factorial(number) {
	let result = 1;

	for (let i = 2; i <= number; i++) {
		result = result * i;
	}

	return result;
}

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
console.log(factorial(4)); //24
console.log(factorial(5)); //120
console.log(factorial(8)); //40320
console.log(factorial(10)); //3628800
