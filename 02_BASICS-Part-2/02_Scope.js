// //Global Scope:-  in this scope you can acess the variable from  any whare
// let num1 = 20;
// var num2 = 30;
// const num3 = 40

// {
//     console.log(num2)// these all are acceable from anywhere 
//     console.log(num1)
//     console.log(num3)
//     let num4 = 299;
// }
// // local Scope : - int this scope you can only access the varible in side the local scope
// console.log(num4);// it is throw ReferenceError: num4 is not defined it mean you can not access it outside the function 


// Nested Scope
// the child function is access the propertes of parent function but parent function does not access the properties of child function 
// function one(){
//     const username = "sumit"
    
//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website);// throw error ReferenceError: website is not defined becouse we access it outside the scope 

//     two()
// }
// one()

// scope using if-else statement
// if (true) {
//     const username = "naman"
//     if(username === "naman"){
//         const newWeb  = " Youtube"
//         console.log(username + newWeb)
//     }    
//     // console.log(newWeb)//throw ReferenceError: newWeb is not defined

// }

// console.log(username);//becouse you can not access it outside the scope ReferenceError: username is not defined

// ++++++++++++++++++++++++++++++++++  Intresting  Hoisting ++++++++++++++++++++++++++++
console.log(addOne(6));// here we access the variable before the initilazing 
function addOne(value){
    return value +1
}



//variable can hold json value or manything 
// here we declearing the variable and as well as storing the variable thats way it is throw error this is also say hoisting

// console.log(addTwo(4));//ReferenceError: Cannot access 'addTwo' before initialization becouse here we stroe the function in a variable that why it is throw error
const addTwo = function(num){
    return num + 2
}


