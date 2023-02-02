/*
PROBLEM
How to check if an object is an array or not? provide some code.
*/

//ANSWER


function isArray(param) {
  // if(typeof param === 'string'){
  if (Object.prototype.toString.call(param) === '[object Array]') {
    return `the type is = ${typeof param}`
  } else {
    return typeof param
  }
}

function isArrayModern(param){
   return Array.isArray(param)
}

console.log(isArray([1, 2, 3, 4, 5]));
console.log(isArray('yes'));

console.log(isArrayModern([1,2,3,4,5]));
console.log(isArrayModern('yes'));


