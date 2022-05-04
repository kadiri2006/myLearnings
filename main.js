// 1

let obj1 = {
  name: "hello",
  add: {
    home: "home add",
    office: {
      office1: "office 1 add",
      office2: "office 2 add",
      meth: () => "office method",
    },
  },
};

let obj2 = { ...obj1 };

obj2.add.office.office1 = "office 1 changed";

console.log(obj1); //office 1 changed

console.log(obj2); //office 1 changed
// console.log();
