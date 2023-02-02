//pivot element - can be choosen

//worst case - O(n^2)
//avg case - O(nlogn)
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  //pivot is the last element of the array
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  //O(n)
  for (let i = 0; i < arr.length - 1; i++) {
    //O(logn) -- divide the array into two smaller arrays
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [9, 8, 7, 3, 5, 10];
quickSort(arr);
console.log(arr);
