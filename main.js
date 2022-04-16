function test() {
  console.log("this value", this);
  console.log("arguments value", arguments);
}

let testobj = {
  name: "testing object",
  test: (...arguments) => {
    console.log(arguments); //[1, 2, 3]
    console.log("this value ", this); //refer window obj because of arrow function
    let x1 = { ...arguments };
    let { ...x2 } = arguments;
    console.log(x1); //{0: 1, 1: 2, 2: 3}
    console.log(x2); //{0: 1, 1: 2, 2: 3}
    let x3 = [...arguments];
    let [...x4] = arguments;
    console.log(x3); //[1, 2, 3]
    console.log(x4); //[1, 2, 3]
  },
};

test();
testobj.test(1, 2, 3);
