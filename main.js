function addition(a, b) {
  return new Promise((x, y) => {
    x(a + b);
  });
}

addition(2, 3)
  .then((x) => {
    console.log(x);
    return x + 10;
  })
  .then((x) => {
    console.log(x);
    return x + 10;
  })
  .then((x) => console.log(x));
