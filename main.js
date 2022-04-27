let input = function () {
  console.log(1);
};

setTimeout(input, 2000); //it prints 1 not 2 because ,setTimeout taken value not reference

input = function () {
  console.log(2);
};
