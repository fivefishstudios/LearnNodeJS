// Your Javascript Code Goes Here

var person = {
  firstname: 'John',
  lastname: 'Doe',
  greet: function() {
    // console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    return this.firstname + '!' + this.lastname;
  }
};

var x = person;  /*?*/

var name = person.lastname; /*?*/

var fname = person.firstname; /*?*/

console.log(fname + ' ' + name);

