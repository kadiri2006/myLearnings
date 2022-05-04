// 1

let obj = {
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

let obj2 = Object.assign({}, obj);//it does not give deep clone
obj2.add.office.office2 = "office 2 changed";
console.log(obj2);//office 2 changed 

console.log(obj);//office 2 changed
