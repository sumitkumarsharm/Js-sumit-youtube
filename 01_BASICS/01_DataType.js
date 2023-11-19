/* Data Type

Primitive Type
1. Number
2.BigInt
3.String
4.Boolean true/false
6.Null - standalone Value
7.Undefined
8.symbol :- to make special element than we use this

Referance Type/NonePrimitive Type
(1)Array
(2)Object
(3)Function

*/

//number
let num = 12;
console.log(num);
console.log(typeof num);

//string
let Name = "Harsh";
console.log(typeof Name);

//boolean
let B = 0;
console.log(B);;

//null
let n = null;
console.log(n);

//Undefined
let UserEmail;
console.log(typeof UserEmail);

//symbol
let id = Symbol('1234')
let anotherId = Symbol('1234');
console.log(id === anotherId);


//BigInt
const bigNumber = 123443276567875672345432123434n
console.log(typeof(bigNumber));

//Array
const heros = ["saktiman", "Naagraj", "doga"]


//Object
let Names = {
    ids:"12sumit",
    position:"Superwiser",
    Age:22,
    office:"gurgao"
}

//Function
const MyFunction = function(){
    console.log("Hello world");
}
 

// to check datatype we use
console.log(typeof MyFunction);

//Study to this 
//https://tc39.es/ecma262/2023/#sec-typeof-operator

//+++++++++++++++++++++++++ Memory +++++++++++++++++++
// Stack : whenever you should chnage somthing into the primitive datatype and want to access than is give to you only copy of the element ex- number boolean string etc, 

let myYoutube = "sumitSharma"
let anotheName = myYoutube
anotheName = "Enemey"
console.log(anotheName);
console.log(myYoutube);


// Heap : whenever you should chnage somthing into the primitive datatype and want to access it is not give to you copy of the element it is give to you orignal element ex- object, function, array 

let user = {
    email:'google.com',
    id:1233123,
    upi_id: 92,

}
let usertwo = user;
usertwo.email = 'sumit@gmail.com'
console.log(usertwo);
console.log(user);
