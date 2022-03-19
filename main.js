console.clear();

// call back hell

/* let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fru_name, prod_call) => {
  setTimeout(() => {
    console.log(`selected ${stocks.Fruits[fru_name]} as fruit`);
    prod_call("production starte'd");
  }, 3000);
};

let production = (order) => {
  console.log(order);
  setTimeout(() => {
    console.log("chopped");
    setTimeout(() => {
      console.log("add water and ice");
      setTimeout(() => {
        console.log("machine started");
        setTimeout(() => {
          console.log("container selected");
          setTimeout(() => {
            console.log("selected toppings");
            setTimeout(() => {
              console.log("ice cream served");
            }, 2000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 1000);
  }, 1000);
};

order(3, production);
 */

//promise formate

/* let is_shop_open = false;

let order = (time, work) => {
  return new Promise((res, rej) => {
    if (is_shop_open) {
      setTimeout(() => {
        res(work());
      }, time);
    } else rej("shop closed");
  });
};

let s = order(1000, () => {
  console.log("take starberry");
});
// console.log(s);

s.then((x) =>
  order(2000, () => {
    console.log("take water");
  })
)
  .then(() => order(2000, () => console.log("start the machine")))

  .then(() => dummy())

  .then(() => order(2000, () => console.log("select container")))

  .catch((x) => console.log(x));

function dummy() {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res(console.log("dummy"));
    }, 2000)
  );
} */

//difference of async and  new Promise

/* function dummy1(params) {
  return new Promise((res, rej) => {});
}

console.log(dummy1());

async function dummy2() {}

console.log(dummy2()); */

//asynic-await try and catch

/* function dummy1(value, time) {
  return new Promise((res, rej) => {
    if (value) {
      setTimeout(() => {
        res("success");
      }, time);
    } else {
      rej("fail");
    }
  });
}

async function dummy2() {}

async function dummy3(value, time) {
  try {
    console.log("try block");
      return await dummy1(value, time);
  } catch (error) {
    console.log("catch block");
    throw error;
  }
}

dummy3(true, 1000)
  .then((x) => {
    console.log(x);
    return dummy3(true, 3000);
  })
  .then((x) => console.log(x))
  .then((x) => dummy3(false, 6000))
  .catch((x) => console.log(x)); */

// await keyword code example   (best example for await)

let dummy = async () => {
  //if no async to function ,its gives same results as before when there is no await
  console.log("name 0");
  await name(); //in no await
  console.log("name2");
  console.log("name3");
  console.log("name4");
};

function name() {
  return new Promise((res, rej) => rej(console.log("name1")));
}

dummy();
console.log("name5");
console.log("name6");
console.log("name7");

//inthese case "rej" in "promise" and providing "async and await" to dummy function ,  out put displayed is as below

//output:name 0,name 1,name 5,name 6,name 7
