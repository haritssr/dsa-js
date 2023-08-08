// #1 using toLocaleString() method
// let n = 1234567;
// console.log("The given number is " + n, typeof n);
// let m = n.toLocaleString("en-US");
// console.log("The new number is " + m, typeof m);

// #2 using split() method
// let number = 1234567;
// let formatter = Intl.NumberFormat("en-US");
// let formatted = formatter.format(number);
// console.log(formatted);

// #3 using replace() method
let number1 = 1234567;
let number1asString = number1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let number1asStringToNumber = number1asString.replace(
  /\B(?=(\d{3})+(?!\d))/g,
  " "
);

let string2 = "1.234.567";
let number2 = Number(string2);

console.log(`number1 = ${number1}:${typeof number1}`);
console.log(`number1asString = ${number1asString}:${typeof number1asString}`);
console.log(
  `number1asStringToNumber = ${number1asStringToNumber}:${typeof number1asStringToNumber}`
);
