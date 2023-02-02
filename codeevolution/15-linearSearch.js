function linearSearch(array, t) {
  return array.indexOf(t);
}

let array = [1, 2, 3, 4, 5, 6];

console.log(linearSearch(array, 1)); //0
console.log(linearSearch(array, 2)); //1
console.log(linearSearch(array, 3)); //2
console.log(linearSearch(array, 4)); //3

console.log('------');

//O(n)
function linearSearch1(array, t) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === t) return i;
  }
  return -1;
}

let array1 = [1, 2, 3, 4, 5, 6];

console.log(linearSearch1(array, 1)); //0
console.log(linearSearch1(array, 2)); //1
console.log(linearSearch1(array, 3)); //2
console.log(linearSearch1(array, 10)); //-1
