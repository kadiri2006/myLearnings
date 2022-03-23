function one() {
  return new Promise((res, rej) => {
    res("ok")
  })
}



one().then((x)=>console.log(x)).then((x)=>console.log(x)).then(()=>console.log("done2"))