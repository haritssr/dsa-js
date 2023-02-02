// bubble sort is bad in real world
//use this as a introduction

// given array: let arr = [-6,20,8,-2,4]
// bubbleSort(arr) => [-6, -2, 4, 8, 20]

// compare adjacent element in the array and swap the positions if they are not in the intended order
//repeat the instruction as you step through each element in the array

//[-6, 20, 8, -2, 4]
// are -6 and 20 in order? yes
// [-6, 20, 8, -2, 4]
// are 20 and 8 in order? no, swap
// [-6, 8, 20, -2, 4]
// are 20 and -2 in order? no, swap
// [-6, 8, -2, 20, 4]
// are 20 and 4 in order? no, swap
// [-6, 8, -2, 4, 20]
// end of array. "Element swapped?"" yes? repeat the comparison
// are -6 and 8 in order? yes
// [-6, 8, -2, 4, 20]
// are 8 and -2 in order? no, swap
// [-6, -2, 8, 4, 20]
// are 8 and 4 in order? no, swap
// [-6, -2, 4, 8, 20]
// are 8 and 20 in order? yes, finish

//O(n^2)
function bubbleSort(arr) {
  let swapped;
  let ye = arr.length - 1;
  do {
    swapped = false;
    for (let i = 0; i < ye; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
      console.log(arr);
    }
    ye--;
  } while (swapped);
}

const arr = [
  10, 9, 8, 7, 6, 10, 9, 8, 7, 6, 10, 9, 8, 7, 6, 10, 9, 8, 7, 6, 10, 9, 8, 7, 6, 10, 9, 8, 7, 6,
];
bubbleSort(arr);
console.log('------');

console.log(arr);
