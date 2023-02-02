// the assumption is that the first item in an array must be known

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    //sorted part of the array
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j--;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [8, 7, 6, 5, 4];
insertionSort(arr);
console.log(arr);
// console.log('yes');
