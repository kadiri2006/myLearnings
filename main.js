var a = 1;
function bar() {
  if (false) {
    var a = 10;
  }
  console.log(a);
}

bar();
