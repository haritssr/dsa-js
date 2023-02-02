//Mary is anagram of Army

let a = 'Mary';
let b = 'Army';

function isAnagram(first, second) {
  let a = first.toLowerCase();
  let b = second.toLowerCase();

  a = a.split('').sort().join('');
  b = b.split('').sort().join('');

  console.log(a, b);

  return a === b;
}

console.log(isAnagram('haris', 'sirah'));
