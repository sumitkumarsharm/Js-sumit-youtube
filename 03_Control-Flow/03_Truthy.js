const userEmail = 0
if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't Get the Email");
}

//Falsy Value

// false, 0, -0, bigInt 0n, "", Null, Undefined, NaN

//Truthy Value

// True, 1, "false", "0", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Your Array is Empyt");    
}