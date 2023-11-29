//  Immedieatly invoked Function Exexution

// normal function
(function anyvalue(){
    console.log("Connedcted to database")
})();// you must have to end the function becouse after the function it the code is not working and therow error

//using Arrow function
(()=>{
    console.log("DB Connected to");
})();


// we can also give variable to our function
((anyvalue2) => {
    console.log(`${anyvalue2} is connected to the db`);
})("mongooes");

