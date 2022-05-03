function outer() {
  var a = "hello";
  return function inner() {
    console.log(a); //hello
  };
}

let res = outer(); // this "inner" fun  form closure.

a = "hello to hi";
res();
