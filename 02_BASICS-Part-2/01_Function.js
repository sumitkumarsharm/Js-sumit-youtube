// function MyName(){
//     console.log("S");
//     console.log("U");
//     console.log("M");
//     console.log("I");
//     console.log("T");
// }

// // MyName()


// //Way first
// // function AddtwoNum(a,b){
// //     return a+b;
// // }

// // console.log(AddtwoNum(12,13));

// //way Second
// function Add(num1, num2){
//     // let result = num1+num2;
//     // return result
//     // console.log("Sumt Sharma");// when ever we write somthing after the return than it is not execute 
//     //also we can 
//     return num1+num2
// }

// let result = Add(12,14)
// console.log("result" , result);

// //Make user loggin alert

// function LogginUser(Username = "sakshi"){// if we want to give defeult value
//     // if(Username === undefined)// also this way
//     if(!Username)// we can also write this way
//     {
//         console.log("Please Enter Usernsme")
//         return
//     }else{
//         return  `${Username} just logged in`
//     }
            
// }

// console.log(LogginUser("sumit"));//it is return : sumit just logged in
// console.log(LogginUser(""));// now it is return : just logged in
// console.log(LogginUser())// it is return : undefined just logged in

//shoping card 

function calculateCardPrice(...num1){// if i use three dot(...) in function than we say this is rest operator and if i use (...) in Object than we say this is spred operator
    return num1
}
console.log(calculateCardPrice(230,243,400,500));


function calculateCard(var1, var2, ...num1){// here var1 = 230, var2 = 243 and the rest all object gose into num1
    return num1
}
console.log(calculateCardPrice(230,243,400,500));

// function on Object

// for shoping card

const user = {
    username: "sumit",
    price:1999
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username:"Amit",
    price:2999
})


// Function on Array
const myArray = [200,300,400,500,600]

function resultSecondvalue(getArray){
    // return myArray[3]
    return getArray[3]
}
// console.log(resultSecondvalue(myArray))
console.log(resultSecondvalue([200, 300, 400, 700, 400]))// if you want to don't store in variable so you can also do  this way