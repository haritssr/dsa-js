function yes() {
  for (let i = 0; i <= 20; i++) {
    if (i === 0) {
      console.log(0);
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log(i, 'fizz-buzz');
    } else if (i % 3 === 0) {
      console.log(i, 'fizz');
    } else if (i % 5 === 0) {
      console.log(i, 'buzz');
    } else {
      console.log(i);
    }
  }
}

yes();
