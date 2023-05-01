//How to get the summation from 1 to any number

// Create a function with a parameter
function summation(num) {
  // Create an array to push
  let arr = [];
  // Create a variable to set up a condition
  let i = 1;
  // While the variable is less than the implemented number
  while (i <= num) {
    // Add the value to the array
    arr.push(i);
    // Increase variable by 1
    i++;
  }
  // Confirm the array
  console.log(`Created array: [${arr}]`);
  //Create a sum that'll add all values in the array
  const sum = arr.reduce(function (a, b) {
    // Return the summation
    return a * b;
  });
  //Confirm the summation
  console.log(`Summation is ${sum}.\n`);
}
//Call the function with any number in the parameter
summation(4);

/*******************************************************************/

/*
  How to return a multiple of an number array
*/

function grow(x) {
  const grow = x.reduce((a, b) => a * b);
  console.log(grow);
}
grow([1, 2, 3, 4]);

/*******************************************************************/

/* 
How to w`rite a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/

function checkSameCases(a, b) {
  if (
    (a.match(/[A-Z]/) && b.match(/[A-Z]/)) ||
    (a.match(/[a-z]/) && b.match(/[a-z]/))
  ) {
    console.log(1);
  } else if (
    (a.match(/[A-Z]/) && b.match(/[a-z]/)) ||
    (a.match(/[a-z]/) && b.match(/[A-Z]/))
  ) {
    console.log(0);
  } else if (!b.match(/[a-z]/) || !b.match(/[a-z]/)) {
    console.log(-1);
  }
}

checkSameCases('a', '1');

/*******************************************************************/

/*Write function bmi that calculates body mass index (bmi = weight / height2). */

function findBMI(weight, height) {
  const bmi = weight / (height ^ 2);
  console.log(bmi);
  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25) {
    return 'Normal';
  } else if (bmi <= 30) {
    return 'Overweight';
  } else if (bmi > 30) {
    return 'Obese';
  }
}

console.log(findBMI(190, 70));
