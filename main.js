function multiplication(a, b) {
  return new Promise((x, y) => {
    setTimeout(() => {
      if (a + b <= 5) {
        x(a * b);
      } else {
        y("third:3");
      }
    }, 3000);
  });
}

async function call(a, b) {
  let first = await multiplication(a, b);
  console.log(`first:${first}`);
  let second = await multiplication(first, b);
  console.log(`second:${second}`);

  try {
    let res = await multiplication(second, b); //here we got "res" as error directly because of using "await" so error go's to catch block
  } catch (error) {
    throw error;
  }
}

/* try {
  console.log(call(1, 2)); //here we cant move into catch block because "call(1,2)" return promise .so that's why we use "then-catch"   [error in log:main.js:24 Uncaught (in promise) third:3]
} catch (error) {
  console.log(error);
} */

call(1, 2)
  .then((x) => console.log(x))
  .catch((x) => console.log(`error :${x}`));
