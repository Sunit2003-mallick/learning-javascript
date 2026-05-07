const account_Id = 1234567890;
let account_Name = "John Doe";
var account_Password = "password123";
let account_State; // undefined
account_City = "New York";

//account_Id = 9876543210;
console.log(account_Id);

account_Name = "Jane Smith";

account_Password = "newpassword456";

account_City = "Los Angeles";

console.table([account_Id, account_Name, account_Password, account_City]);

/*
const: block-scoped, cannot be reassigned, must be initialized
let: block-scoped, can be reassigned, can be initialized later
var: function-scoped, can be reassigned, can be initialized later
*/