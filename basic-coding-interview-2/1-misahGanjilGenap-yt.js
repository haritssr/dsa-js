let genap = [];
let ganjil = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    genap = [...genap, i];
  } else {
    ganjil = [...ganjil, i];
  }
}

console.log('genap: ', genap);
console.log('ganjil: ', ganjil);
