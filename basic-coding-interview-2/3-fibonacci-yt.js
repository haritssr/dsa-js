let f = [];
let n1 = 0;
let n2 = 1;
for (let i = 0; i <= 10; i++) {
  if (i === 0 || i === 1) {
    //  f = [...f, i];
    f.push(i);
  } else {
    let total = n1 + n2;
    //  f = [...f, total];
    f.push(total);
    n1 = n2;
    n2 = total;
  }
}

console.log(f);
