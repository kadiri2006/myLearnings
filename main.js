function one() {
  return "one";
}

function two() {
  return new Promise((x, y) => {
    y();
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

one();
two();
three(3);

five();
