/**
 * By threkleb
 * @param {string} string
 * @return {boolean}
 */

/*
export default function isPalindrome(string) {
  //first string position, soon the increase one from here if string.length > 0
  let left = 0;

  //rightest position, soon will decrese one from here if string.length > 2
  let right = string.length - 1;

  // left < right, make sure the string.length > 1
  while (left < right) {
    //if string.length === 2 && satisfied, return false, the loop ended because left !< right anymore, 
      //left = 1 + 1 = 2, right = 2 - 1 = 1, left !< right
    //if string.length > 2, the loop continue until left !< right
    if (string[left] !== string[right]) {
      return false;
    }

    //if satisfied && string.length > 2, increase the left by one
    //if satisfied && string.length > 2, decrease the right by one
    left += 1;
    right -= 1;
  }

  return true;
}
*/

function isPalindrome(string){
  let left = 0;
  let right = string.length - 1;

  while(left < right){
    if(string[left] !== string[right]){
      return false
    }

    left = left + 1;
    right = right - 1
  }
  return true
}

console.log(isPalindrome('apa'));
console.log(isPalindrome('ada'));
console.log(isPalindrome('dimana'));
console.log(isPalindrome('aura'));
console.log(isPalindrome('haris'));
console.log(isPalindrome('kalah'));
