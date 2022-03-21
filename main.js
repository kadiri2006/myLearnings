function one() {
  return new Promise((x,y)=>x)
}

function three(x) {
  let i = x;
  while (i <= 2999999999) {
    
    i++;
  }

  return "three";
}

function five() {
  return "five";
}

console.log(one());
console.log("two");
console.log(three(2));
console.log("four");
console.log(five());

