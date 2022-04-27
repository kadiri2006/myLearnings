let input = function () {
  console.log(1);
};

setTimeout(input, 2000);//1

input = function () {
  console.log(2);
};

setTimeout(input, 2000);//2