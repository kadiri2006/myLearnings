function test() {
  console.log("this value", this);
  console.log("arguments value", arguments);
}

let testobj = {
  name: "testing object",
  test: function () {
    console.log("this value ", this);
    let x1 = { ...arguments };
    let { ...x2 } = arguments;
    console.log(x1);
    console.log(x2);
    let x3 = [...arguments];
    let [...x4] = arguments;
    console.log(x3);
    console.log(x4);
  },
};

test();
testobj.test(1, 2, 3);
