/*

    Objects are a data type that are used to
    store various properties and actions

    Objects properties are stored in a "key: value" format.
*/

const customer = {
  firstname: 'jake',
  lastname: 'smith',
  email: 'jaekSmih!.aol.com',
  phone: undefined,
  zipCode: '631',
  favoriteFlavors: 32,
  cupSize: 'medium',
  favortieStore: 'Target',
  firstVisit: false,
  greeting() {
    console.log(`Hello, my name is ${customer.firstname}.`);
  },
};

console.log(customer);

/*
    There are ways to access properties using two types of notations
*/
/*
    Object dot notation is a way to access properties within objects
    using a "static", previously known, key.
*/

console.log(customer.firstname);

/*
    Object bracket notation is a way to access properties within
    objects using a dynamic, previously undetermined, key.
 */
console.log(customer['lastname']);

/*
    Object methods are functions that are directly attached to a
    object. They can be accessed using both the dot and bracket notation.
*/

customer.greeting();

/*
    To add an object property that is not currently present,
    we can add the property by giving it a value.
    We can display the object in a table format by using
    "console.table()"
*/

customer.weight = '170lbs';

console.table(customer);

/*
    To update a property, we can redefine the property
    by giving it a value.
*/

customer['email'] = 'Jak3Smith1992@email.com';
customer['phone'] = 3195551234;
customer['zipCode'] = '63132';
customer['favoriteFlavors'] = ['coffee', 'strawberry', 'macha'];

/*
    We can also delete a property, we need to use the delete operator
    to remove it from the object.
*/

delete customer['zipCode'];
delete customer['favortieStore'];

console.log(customer);

/*
Wth for...in loop, each key inside the object is iterated over.
*/

for (property in customer) {
  console.log(property);
}
