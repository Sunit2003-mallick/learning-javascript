//Imediately Invoked Function Expression (IIFE)

//A function that runs immediately
         //or
// many pollutions in the global scope so to avoid that pollution we can use IIFE.
//IIFE is a function that runs immediately after it is defined and it is not accessible outside of its scope.
// poluutions means that we are creating variables in the global scope 
        // which can be accessed by any other code in the global scope 
        // and it can cause conflicts if we have multiple variables with the same name.
//()(); // we are defining a function and then immediately invoking it OR say we end this with a semicolon( ; ) to avoid any issues with the code that comes after it.

(function chai() {
    //named iife
    console.log(`DB CONNECTED`);
})(); //DB CONNECTED
 

( () => {
    //anonymous iife
    console.log(`DB CONNECTED TWO`);
} )(); //DB CONNECTED TWO

( (name) => {
    //anonymous iife with parameters
    console.log(`DB CONNECTED TWO ${name}`);
} )('sunit'); //DB CONNECTED TWO sunit