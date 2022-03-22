function one() {
  console.log("one");
  two().then((x) => console.log(x));
  console.log("three");
}

function two() {
  return new Promise((resolve) => resolve("two"));
}

one();
let i = 0;
while (i < 199999999) {
  i++;
}

console.log("four");
