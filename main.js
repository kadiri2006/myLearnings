try {
  // moveBy();
  throw "throw error";
} catch (error) {
  console.log(error);
} finally {
  console.log("final line"); //this line is executed even presence  of "throw" in catch block because of "finally"
}

//here we would get uncaught error because we did not handle the error("throw") in catch block

//if we move that [throw "throw error"] from catch block to try
//try block we would't get that uncaught error because we handleing
//error produced by  try block in catch block .
