function one() {
  return "one";
}

function two() {
  return new Promise((x, y) => {
    y("rejected");
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
two().then(x=>console.log(x))

three(3);

five();
