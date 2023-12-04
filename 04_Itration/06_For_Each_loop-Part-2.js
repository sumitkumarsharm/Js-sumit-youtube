// const Study = ['coding', 'writing', 'listning', 'Reaing'];

// // but we need to print tha value every time we need to return somewhere

// let value = Study.forEach((item)=>{
//     console.log(item)
//     return item// undefined :- Becouse forEach loop did not return Anything 
// })
// // console.log(value);


// const myNum = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNum.filter((Num)=>Num>5)
// console.log(newNums);

//  but i want to return somthing 
const mENum = [1,2,3,4,5,6,7,8,9,10];
const nwNums = mENum.filter((Num)=>{
        Num>6// but it is return  Empty array 
        // here we use implicit return
        return Num>4
})
// console.log(nwNums);



//but i want to use only for each loop not filter
const newNum = [];
mENum.forEach((sum)=>{
        if (sum>4) {
                newNum.push(sum)                
        }
})
console.log(newNum);