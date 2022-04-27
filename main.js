let a = 1;
let input = function () {
  console.log(a);
};

setTimeout(input, 2000);//it prints 2 not 1
a = 2;


