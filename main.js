let one = new Promise((res) => {
  for (let index = 0; index < 10000000000; index++) {}
  console.log("dummy");

  setTimeout(() => {
    res("one");
  }, 3000);
});
one.then((x) => console.log(x));
let two = Promise.resolve("Two");

two.then((x) => console.log(x));
console.log("last:without promise");
