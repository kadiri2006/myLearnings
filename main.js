let arr = [
  { name: "bharath", age: 12 },
  { name: "bharath", age: 13 },
  { name: "bharath", age: 18 },
  { name: "bharath", age: 15 },
  { name: "bharath", age: 12 },
  { name: "bharath", age: 13 },
  { name: "bharath", age: 13 },
  { name: "bharath", age: 18 },
];

Array.prototype.myreduce = function (cb, par2) {
  if (par2) {
    let pre = par2;

    this.forEach((e, i) => (pre = cb(pre, this[i])));
    return pre;
  } else {
    let pre = this[0];

    this.forEach((e, i, arr) => {
      arr.length - 1 === i ? "" : (pre = cb(pre, arr[i + 1]));
    });
    return pre;
  }
};

let res2 = arr.reduce((pre, cur) => {
  if (pre[cur.age]) {
    pre[cur.age] += 1;
  } else {
    pre[cur.age] = 1;
  }
  return pre;
}, {});
console.log(res2);

let res = arr.myreduce((pre, cur) => {
  if (pre[cur.age]) {
    pre[cur.age] += 1;
  } else {
    pre[cur.age] = 1;
  }
  return pre;
}, {});
console.log(res);
