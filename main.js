let a = 0;
function test(a) {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(a), 5000);//5,5,5,5,5
    a++;
  }
}

test(a)

setTimeout(() => {
  console.log(a);//0
}, 7000);

////////////////////////////////

let a = 0;
function test() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(a), 5000);//5,5,5,5,5
    a++;
  }
}

test()

setTimeout(() => {
  console.log(a);//5
}, 7000);
