try {
  moveBy();
} catch (error) {
  throw "throw error";
  console.log(error);
} finally {
  console.log("final line"); //this line is executed even presence  of "throw" in catch block because of "finally"
}
