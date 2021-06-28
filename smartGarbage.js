const smartGarbage = function(trash, bins){
  if(trash == 'waste') {
    bins.waste += bins.waste;
  }
  if(trash == 'recycling') {
    bins.recycling += bins.recycling;
  }
  if(trash == 'compost') {
    bins.compost5 += bins.recycling;
  }

  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

