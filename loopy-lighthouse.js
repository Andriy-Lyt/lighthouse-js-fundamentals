function loopyLighthouse(range, multiples, words){
  const [start, end] = range;
  const [mult1, mult2] = multiples;
  const [word1, word2] = words;

  for(let i = start; i <= end; i++){
    
    if(i % mult1 !== 0 && i % mult2 !== 0){
      console.log(i);
    }
    if (i % mult1 === 0) {
      console.log(word1);
    }
    if (i % mult2 === 0) {
      console.log(word2);
    }
    if (i % mult1 === 0 && i % mult2 === 0) {
      console.log(word1 + word2);
    }
  }
}
loopyLighthouse([15, 30], [2, 5], ["Batty", "Beacon"]);

