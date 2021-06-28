const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

const judgeVegetable = function (vegetables, metric) {
  let numbers = [];
  for (let i = 0; i < vegetables.length; i++) {
    numbers.push(vegetables[i][metric]);    
  }
  // console.log(typeof numbers[0], numbers);

  //find index of max number in array:
  let maxValue = numbers[0];
  let maxIndex = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxIndex = i;
      maxValue = numbers[i];
    }
  }
  // console.log("maxIndex: "+maxIndex);
  
  return vegetables[maxIndex].submitter;

}// closing function

console.log(judgeVegetable(vegetables, metric));



