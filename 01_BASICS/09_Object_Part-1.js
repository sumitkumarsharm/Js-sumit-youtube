// there are two type to declear the object
//(1)literal 
//(2)Constractor



// how to take symbol
let MySbl = Symbol("Key1")

// Literal 
const Users = {
    Name:"sumit",
    [MySbl]:"Mykey2",
    "Full Name":"Sumit Kumar Sharma",
    StuId:191191055,
    Age:23,
    location:"Bhopal",
    email:"sumit@gmial.com",
    isLoggedIn:false,
    lastLogInDay:["monday", "Tuesday", "saturday"]
}

// to access the object we use dot( . )

// console.log(Users.lastLogInDay[2]);
// console.log(Users.email);

// also access this way
// console.log(Users["email"]);

// if we want to access string value than
// console.log(Users.Full Name);// this way it is showing error 
// console.log(Users["Full Name"]);//it is alredy suggest me to use this way

// to accesing symbol we use
// console.log(typeof Users[MySbl]);

// if we want to  change the email Id than
// Users.email = "sumitkumar@google.com";
// console.log(Users);

// if i want to frezz the value mean no one change the value  than
// Object.freeze(Users)
// Users["Full Name"] = "Naman Sharma";
// console.log(Users);


//Ading function in the Object
Users.greeting = function(){
    console.log("Hello Users");
}

console.log(Users.greeting());


Users.greeting2 = function(){
    console.log(`Hello  ${this["Full Name"]}`);
}

console.log(Users.greeting2())