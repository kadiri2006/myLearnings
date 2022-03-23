function one() {
  return new Promise((res, rej) => {
    res(2);
  });
}

one()
  .then((x) =>x<2
  )
  .then((x) => console.log(x))
  .then(() => console.log("done"))
  .catch((e) => console.log(e));
