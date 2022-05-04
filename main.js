//primitive values
//string,boolean,null,undefind,number

let a = "hello";
let b = a;

b = "hello to hai";

console.log(a); //hello
console.log(b); //hello to hai

//non-primitive values
// arrays,objects,functions

let nonA = { name: "hello" };
let nonB = nonA;

nonB.name = "hello to something";

console.log(nonA); //{name:"hello to something"}
console.log(nonB); //{name:"hello to something"}

//if you change by assign new obj

let objA = { name: "hello" };
let objB = objA;

objB = { name: "original does't changed" };

console.log(objA); //{name: 'hello'}
console.log(objB); //{name: "original does't changed"}
