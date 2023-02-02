function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return mergeSort(mergeSort(leftArr), mergeSort(rightArr));
}



const arr = [9, 8, 7, 3, 5, 10];
console.log(mergeSort(arr));
