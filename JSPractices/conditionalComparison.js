// A conditional and comparison exercise repository for practices

// Creating a function name fizzBuzz that'll
// output different results when certain
// conditions are met.
// Select the code and run it

function fizzBuzz() {
  for (let i = 1; i <= 15; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// Creating a function that will label even and odd numbers
// Select the code and run it

function evenOrOdd() {
  for (let x = 1; x <= 10; x++) {
    if (x % 2 == 0) {
      console.log(x, ': even');
    } else {
      console.log(x, ': odd');
    }
  }
}

evenOrOdd();

// Creating the same Even and Odd function but in ternary
// conditionals statements.
// Select the code to run it.

function evenOrOdd() {
  for (let y = 1; y <= 10; y++) {
    console.log(y % 2 === 0 ? y + ': Even' : y + ': Odd');
  }
}

evenOrOdd();
