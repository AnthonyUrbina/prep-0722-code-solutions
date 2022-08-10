/* eslint-disable no-unused-vars */
var person = {
  firstName: 'Matt',
  lastName: 'Damon',
  hobby: 'acting'
};
console.log(person);

var fullName = [person.firstName + ' ' + person.lastName];
console.log("The person's name is:" + ' ' + person.firstName + ' ' + person.lastName);

person.job = 'acting';
console.log("The person's current job is:" + ' ' + person.job);

person.previousJob = null;
console.log("The person's previous job is:" + ' ' + person.previousJob);

console.table(person);
