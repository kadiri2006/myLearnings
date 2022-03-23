function one() {
  return new Promise((res, rej) => {
    res("ok")
  })
}



one().then((x)=>{console.log(x);return "from first"}).then((x)=>console.log(x)).then(()=>console.log("done2"))