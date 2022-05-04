function outer() {
  var a = 10;

  return function inner() {
    console.log(a); //10
  };
}

let x = outer();

setTimeout(() => {
  a = 20; // this setTime out does't change "a" value in "outer" fun because of this setTimeout not in "var a=10" scope
}, 1000);

setTimeout(() => x(), 1000);
