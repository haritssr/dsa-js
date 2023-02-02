//given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found

//binary search only work in a sorted array

//O(logn)
function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === array[middleIndex]) {
      return middleIndex;
    }

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7];

console.log(binarySearch(array, 1)); //0
console.log(binarySearch(array, 2)); //1
console.log(binarySearch(array, 4)); //3
console.log(binarySearch(array, 6)); //5

console.log('----------');

//recursive version

//tips for recursive solutions
//figure out how to break down the problem into smaller versions of the same problem
//identity the base case for recursion
function rBinarySearch(array, target) {
  return search(array, target, 0, array.length - 1);
}

//search is searching area
//O(logn)
function search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === array[middleIndex]) {
    return middleIndex;
  }

  if (target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, middleIndex + 1, rightIndex);
  }
}

console.log(rBinarySearch(array, 1)); //0
console.log(rBinarySearch(array, 2)); //1
console.log(rBinarySearch(array, 4)); //3
console.log(rBinarySearch(array, 6)); //5
