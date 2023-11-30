// const userEmail = []
// if (userEmail) {
//     console.log("Got user Email");
// } else {
//     console.log("Don't Get the Email");
// }

//Falsy Value

// false, 0, -0, bigInt 0n, "", Null, Undefined, NaN

//Truthy Value

// True, 1, "false", "0", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Your Array is Empyt");    
// }

// const EmptyObj = {}
// if (Object.keys(EmptyObj.length === 0)){
//     console.log("Object is Empty");
// }


//Nullish Coalescing Operator(??): null Undefind

let vell;
// vall = 5 ?? 10;
// vall = null ?? 10
// vall = undefined ?? 10
vall = null ?? 10 ?? 12;// it is checking the first value
// console.log(vall);
// console.log(vall);


// Ternary Operator
const icePrice = 100
icePrice<=80? console.log("it is grater than 80"):console.log("Dont buy it is cously");