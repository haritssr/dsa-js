/*
PROBLEM
Given a string, reverse each word in the sentence.
For example 'Welcome to this JavaScript Guide!' should be become 'emocleW ot siht tpircsavaJ !ediuG'
*/
function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

let string = 'Welcome to this JavaScript Guide!';

//1
//!ediuG tpircsavaJ siht ot emocleW
let reverseEntireSentence = reverseBySeparator(string, '');

//2
//'emocleW ot siht tpircsavaJ !ediuG'
let reverseEachWord = reverseBySeparator(reverseEntireSentence, ' ');

console.log(string);
console.log(reverseEntireSentence);
console.log(reverseEachWord);


