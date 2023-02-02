const array = [
  1, 4, 5, 3, 2, 5, 3, 4, 8, 5, 4, 3, 6, 0, 4, 3, 2, 1, 5, 9, 9, 4, 3, 1, 3, 0, 2, 2, 4, 6, 2, 4, 7,
  4,
];

//tampilkan angka secara tunggal dan total angka apabila ditunggalkan
//tampilkan total dari masing2 angka

let single = [];
let totalSingle = '';
for (let i = 0; i < array.length; i++) {
  let ketemu = false;
  for (let a = 0; a < single.length; a++) {
    if (array[i] === single[a]) {
      ketemu = true;
    }
  }

  if (!ketemu) {
    single.push(array[i]);
    let totalKetemu = 0;
    for (let e = 0; e < array.length; e++) {
      if (array[i] == array[e]) {
        totalKetemu++;
      }
    }
    totalSingle += `Angka ${array[i]} sebanyak ${totalKetemu} \n`;
  }
}

// array.reduce((a, c) => {
//   if (a !== c) {
//     single.push(c);
//   }
// });

console.log(single);
console.log(single.reduce((a, c) => a + c));
console.log(array);

console.log(totalSingle);
