//.map function
const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNum.map((num)=>num+10)//here we not open scope
//using Scope
// let newNum = myNum.map((num)=>{
//     return num*10
// })

// newNum = myNum.map((sum)=>{
//     return sum >= 7
// })
// console.log(newNum);


// Chaining Of methods
let myCase = myNum
                .map((sum)=>{return sum * 10})// return [ 10, 20, 30, 40,  50, 60, 70, 80, 90, 100]
                .map((sum)=>sum + 5)// yaha par upar wale map function ke result ke sath ham 2 add kr rhe hai
                .filter((sum)=>{return sum >= 16})// yaha par ham second wale map function ke upar reduce method use kr rhe hai
                .filter((sum)=> sum>=65)// yaha par ham filter wale par filter method use kr rhe hai
console.log(myCase);

