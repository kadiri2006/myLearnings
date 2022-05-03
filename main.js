var a = "hello";
function outer(a) {
  return function inner() {
    console.log(a); //hello
  };
}

let res = outer(a);

a = "hello to hi";
res();
