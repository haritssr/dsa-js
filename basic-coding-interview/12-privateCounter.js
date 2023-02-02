function counter() {
  let a = 0;
  return {
    add: function (increment) {
      a += increment;
    },
    retrieve: function () {
      return 'a is ' + a;
    },
  };
}

let b = counter();
console.log(b.retrieve());
b.add(1);
console.log(b.retrieve());
