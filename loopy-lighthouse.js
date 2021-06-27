for(let i = 100; i <= 200; i++){
  
  if(i % 3 !== 0 && i % 4 !== 0){
    console.log(i);
  }
  if (i % 3 === 0) {
    console.log("Loopy");
  }
  if (i % 4 === 0) {
    console.log("Lighthouse");
  }
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  }
}