try {
  moveBy();
} catch (error) {
  throw "throw error";
  console.log(error);
}

console.log("final line");   //this line not executed because of "throw" in catch block
