// Arrays: a data structure to store other multiple values

const vegetables = ['carrots', 'cabbage', 'lettuce', 'celery', 'onions'];

// Arrays are 0-indexed, so 0 is where the first item is.

console.log(vegetables[0]);

/* We can create an array with a single line of code.
 Although, we can modify the array after its declaration,
 we can use the const keyword instead of let keyword because
 we don't need to assign a new value to the array
 variable.
*/

const array = ['Cheverolet', 'Ford', 'Honda'];

// [ 'Cheverolet', 'Ford', 'Honda' ]

//Note: we can also create an arrays with information already present

/* We can modify an array with array methods.
 These methods are able to add, update, delete
 the contents of an array.
*/

// Formatted: array.method(parameter)

// The pop method removes the last index of an array

array.pop();
// [ 'Cheverolet', 'Ford' ]

// The push method adds another index at the end of the an array.
array.push('Cadillac');

// [ 'Cheverolet', 'Ford', 'Cadillac' ]

// The shift method array removes the first index of an array
array.shift();

// [ 'Ford', 'Cadillac' ]

// The unshift method adds an index at the beginning on an array
array.unshift('Dodge');

// [ 'Dodge', 'Ford', 'Cadillac' ]

// The slice index creates a inclusive copy of an array without affecting the original

// Format: array.slice(starting point, endpoint)
const copy = array.slice(0, 2);

//['Dodge', 'Ford'];

//The splice updates the original array by adding, removing or replacing the contents
// format: array.splice(starting point, endpoint, value)
array.splice(2, 0, 'Volvo');

// [ 'Dodge', 'Ford', 'Volvo', 'Cadillac' ]

// What if we had an a numbered array and we wanted to get the highest value?
// The Math.max method returns the max value of its parameters.
const number = [1, 2, 3, 4, 5];
Math.max(...number); // The spread(...) operator spreads the contents of an array into separate arguments.

// 5
