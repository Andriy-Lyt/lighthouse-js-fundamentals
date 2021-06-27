
var laugh1 = function(number){
  let string = '';
  let counter = 0;
  
  while(counter < number) {
      string += "ha! \n";
      counter++;
  }
  return string;
}

var laugh2 = function(number){
  let string = '';
for(let i = 0; i < number; i++){
  string += "ha! \n";
}
return string;
}

// console.log(laugh1(3));
console.log(laugh2(3));


