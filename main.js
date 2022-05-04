function outer() {
  var a = 10;
  setTimeout(() => {
    a = 20;
  }, 1000);
  return function inner() {
    console.log(a); //10
  };
}

let x = outer();
x() 
