let result = new Promise((res, rej) => {
  res("sucess");
  rej("failureeees");
});

async function test() {
  try {
    console.log(await result);
  } catch (error) {
    console.log(error);
  }

  
}

test();
