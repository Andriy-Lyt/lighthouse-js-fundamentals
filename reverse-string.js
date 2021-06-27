//reverse string
let string = 'ABCDEFG';
let reversed = '';

function reverseString(string){
  for(let i = string.length-1; i>=0; i-- ){
    reversed += string[i];
  }
  console.log(reversed);
}

reverseString(string);