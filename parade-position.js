const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves){
  let x=0; let y=0;
  let finalPosition = [];

  for(let element of moves){
    switch(element){
      case 'north':
        ++y; break;
      case 'south':
        --y; break;
      case 'east':
        ++x; break;
      case 'west':
        --x; break;
      }//closing switch   
    } // closing for loop

    finalPosition.push(x);
    finalPosition.push(y);
    return finalPosition;
}// closing function

console.log(finalPosition(moves));



