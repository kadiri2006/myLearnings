function test() {
  console.log("this value", this);
  console.log("arguments value", arguments);
}

let testobj = {
  name: "testing object",
  test: (arguments) => {
    console.log(arguments);//1
    console.log("this value ", this);//refer window obj because of arrow function 
    let x1 = { ...arguments };
    let { ...x2 } = arguments;
    console.log(x1);
    console.log(x2);
    let x3 = [...arguments];//Uncaught TypeError: arguments is not iterable at Object.test (main.js:15:18) at main.js:23:9
    let [...x4] = arguments;
    console.log(x3);
    console.log(x4);
  },
};

test();
testobj.test(1, 2, 3);
