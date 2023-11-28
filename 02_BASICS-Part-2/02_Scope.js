//Global Scope:-  in this scope you can acess the variable from  any whare
let num1 = 20;
var num2 = 30;
const num3 = 40

{
    console.log(num2)// these all are acceable from anywhere 
    console.log(num1)
    console.log(num3)
    let num4 = 299;
}
// local Scope : - int this scope you can only access the varible in side the local scope
console.log(num4);// it is throw ReferenceError: num4 is not defined it mean you can not access it outside the function 