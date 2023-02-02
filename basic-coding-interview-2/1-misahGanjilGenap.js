// pisahkan ganjil genap dari 1 sampai 100

function pisah(from, max) {
  let genap = [];
  let ganjil = [];
  for (let i = from; i <= max; i++) {
    if (i % 2 === 0) {
      genap.push(i);
    } else {
      ganjil.push(i);
    }
  }

  return [genap, ganjil];
}

const [genap, ganjil] = pisah(1, 100);

console.log('genap: ', genap);
console.log('ganjil: ', ganjil);
