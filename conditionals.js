const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
   console.log("Maybe going outside isn't such a great idea…");
 }
 
 if (temperature < -40 || temperature > 40) {
   console.log("Maybe going outside isn't such a great idea…");
 }
 if (!raining) {
   console.log("Leave your umbrella at home!");
 }
 
//  Elementary School if age is below 13
//  Secondary School if age is between 13 and 18 (both inclusive)
//  Lighthouse Labs in all other cases.

if (age < 13) {
   console.log("go to Elementary School");
} else if(age >= 13 && age <= 18) {
   console.log("go to Secondary School");
}else{
   console.log("go to Lighthouse Labs");
}

 // 12 factorial:
 let result = 12;
for (let i = result; i > 0; i--) {
    result = result * (i - 1);
    console.log(result);
}