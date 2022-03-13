function addition(a, b) {
  return new Promise((x, y) => {            //here we did not provide setTimeout
    x(a + b);                                 
    console.log("test:addition");
  });
}

function multiplication(a, b) {
  return new Promise((x, y) => {
    setTimeout(() => {                        //here we providing setTimeout
      x(a * b);
    }, 2000);
    console.log("test:multiplication");
  });
}

/* addition(2, 3)
  .then((x) => {
    console.log(x);
    return x + 10;
  })
  .then((x) => {
    console.log(x);
    return x + 10;
  })
  .then((x) => console.log(x));
 */

console.log(addition(1, 2));      //Promise {<fulfilled>: 3}
console.log(multiplication(2, 3));  //Promise {<pending>}
