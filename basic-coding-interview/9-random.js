// let addSix = createBase(6);
// addSix(10); 16
// addSix(21); 27

function createBase(n) {
  return x => {
    return n + x;
  };
}

let addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(21));
