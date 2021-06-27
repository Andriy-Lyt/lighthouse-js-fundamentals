const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations){
  let goodStations = [];

  for(let array of stations ){
    // console.log("outer for loop aray: "+array);
    if(array[1] >= 20 && (array[2] == 'school' || array[2] == 'community centre')){
    goodStations.push(array);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));
