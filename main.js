var a = "hello";
function outer() {
  return function inner() {
    console.log(a); 
  };
}

let res = outer(); // this "inner" fun does't form closure.

a = "hello to hi";
res();
