function one() {
  console.log("one");
  return "one";
}

function two() {
  return new Promise((x, y) => {
    y();
    console.log("two");    //even rej() function is present on above init log "two" is displayed
  });
}

function three(x) {
  let i = x;
  while (i <= 2999999999) {
    i++;
  }

  console.log("three");

  return "three";
}

function five() {
  console.log("five");
  return "five";
}

one();
two();
three(3);
console.log("four");
five();
