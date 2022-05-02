function one() {
  var b = "hello";
  return function two() {
    return b;
  };
}

let third = one();
b = "kadiri";
console.log(third()); // displays "hello" not "kadiri"
