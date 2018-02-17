
var obj = {
    name: 'John Doe',
    greet: function(param){
        console.log(`Hello ${ this.name } ${ param } `);
    }
}


obj.greet();
obj.greet({ name: 'Jane Doe' });            // still prints John Doe because we didn't use .call 
obj.greet.call({ name: 'Jane Doe' }, '11111');       // now we pass a new object, so 'this' is now pointed to this passed parameter

// now using .apply
obj.greet.apply({ name: 'Jane Doe' }, ['22222'] );       // works the same as .call() if no passed parameters in obj.greet() function

// .call() and .apply() let us borrow methods from existing objects, and pass our own data into it. 
// .call() uses csv parameters while .apply() uses array to pass parameters