function one() {
  return "one";
}

function two() {
  return new Promise((x, y) => {
    x("two");
  });
}

function three(x) {
  let i = x;
  while (i <= 2999999999) {
    i++;
  }

  return "three";
}

function five() {
  return "five";
}

console.log(one());

two()
  .then((x) => console.log(x))
  .then((x) => console.log(three(3)))
  .then((x) => console.log("four"))
  .then((x) => console.log(five()));
