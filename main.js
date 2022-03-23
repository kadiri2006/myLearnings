function one() {
  return new Promise((res, rej) => {
    res("ok")
  })
}



one().then((x)=>console.log(x)).then((x)=>false).then(()=>console.log("done2"))