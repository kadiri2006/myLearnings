function outer() {
  var a = 10;
  setTimeout(() => {
    a = 20;
  }, 1000);
  return function inner() {
    console.log(a); //20
  };
}

let x = outer();

setTimeout(() => x(), 1000);
