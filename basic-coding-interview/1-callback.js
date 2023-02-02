/*
https://www.fullstack.cafe/blog/javascript-code-interview-questions

PROBLEM
Explain what callback function is and provide a simple example

ANSWER
A callback function is a function that passed in to another function as an argument and is executed after some operation has been completed.

Below is an example of a simple callback function that logs to the console after some operations have been completed
*/

function modifyArray(arr, number, callback) {
  //do something to arr here
  arr.push(number);
  //then execute the callback function that was passed after push executed
  callback();
}

let arr = [1, 2, 3, 4, 5];

console.log(
  modifyArray(arr, 100, function () {
    console.log('array has been modified', arr);
  })
);
