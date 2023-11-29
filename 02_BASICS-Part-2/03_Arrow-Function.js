// this function :- it is return the current context 
// const user = {
//     usrname:"sumit",
//     price:999,

//     welcomeMessage: function (){
//         console.log(`${this.usrname}, welcome to the website`);
//         console.log(this);
        //this is use to return current context
        /*{
        sumit, welcome to the website (first context)
        {
            usrname: 'sumit',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
         }
        Naman, welcome to the website  (second context)
        {
            usrname: 'Naman',
            price: 999,
             welcomeMessage: [Function: welcomeMessage]
        }  
         */
    // }
// }

// user.welcomeMessage()
// // someone change the username Value than
// user.usrname = "Naman"
// user.welcomeMessage()

// // which object in the browser :- window Object


// function chai(){
//     const usrname2 = "namana"
//     console.log(this.usrname2)//it is give undefined becouse this is only work with object it is not work with function
// }

// chai()

// const ArrowF = () => {
//     let username3 = "sumit"
//     console.log(this.username3);// here it is also showing undefined
// }
// ArrowF()    

//---------- ARROW FUNCTION----------------

//Basic arrow funcrtion
// const addOne = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(addOne(23,32));


// we can also declear the variable different way
//  implicite return
const addOn = (num1,num2)=> num1 + num2// if you write the adding function in parenthesis here need not to use write return keyword


const addO = (num1,num2)=> {username:"sumit"}// undefined becouse this way parenthesis 
console.log(addOn(23,45));
console.log(addO(3,45));


// Explicit Return
const addOne = (num1,num2)=>{
    return num1 + num2// if you write the adding function in curlybresses here need to use write return keyword
}
console.log(addOne(23,32));
//  Benifits of using parenthes
 //  if you want to return object than 




