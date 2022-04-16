for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);   //0,1,2,3,4 because i refers not value but storge and let is block scope but var is functional scope
  }, i*1000);
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); //5,5,5,5,5
  }, i * 1000);
}
