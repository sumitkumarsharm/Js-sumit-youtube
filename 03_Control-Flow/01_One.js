// If Statment

// let tempratur = 89;
// if (tempratur<50) {
//     console.log("Okey you can go outside ");
// }else{
//     console.log("Don't Go outside dear");
// }

//<, >, =<, >=, ==, =,!=, ====(type check and ckecking), !==


// const score = 200;
// if (score>100) {
//     const power = "fly"
//     console.log(`user power,${power}`);
// }

// console.log(`user power,${power}`);//ReferenceError: power is not defined due to scope 

//Implicite scope
const balance = 10000;
// if (balance>5000) console.log('Amount is to good'),// you can aslo write this way using comma compiler understan this is same scope
// console.log("but it is not too much");// this is imuture code 



//online shoping Account
const userLoggedIn = true
const debitCard = true
const loggedInGoogle = false
const loggedInGmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy course");    
}

if (loggedInGoogle || loggedInGmail) {// here you can check multipale condition
    console.log("You have to buy the couse");
}
