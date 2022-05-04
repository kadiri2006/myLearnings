// 1

/* let obj = {
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

let obj2 = obj;
obj2.add.office.office2 = "office 2 changed";
console.log(obj2); //office 2 changed
console.log(obj); //office 2 changed */

// 2

/* let obj = {
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

let obj2 = JSON.parse(JSON.stringify(obj));
obj2.add.office.office2 = "office 2 changed";

console.log(obj2); //office 2 changed

// {name: 'hello', add: {…}}
// add:
// home: "home add"
// office:
// office1: "office 1 add"
// office2: "office 2 changed"
// [[Prototype]]: Object
// [[Prototype]]: Object
// name: "hello"
// [[Prototype]]: Object

console.log(obj); //office 2 add

// {name: 'hello', add: {…}}
// add:
// home: "home add"
// office:
// meth: () => "office method"
// office1: "office 1 add"
// office2: "office 2 add"
// [[Prototype]]: Object
// [[Prototype]]: Object
// name: "hello"
// [[Prototype]]: Object */

