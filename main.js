let a = 4;

function test1(a) {
   a = 5;
}

test1(a);

console.log(a);//4


function test2() {
  a = 5;
}

test2();
console.log(a);//5

