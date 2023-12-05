// Reduce function
const  SNumber = [1,2,3]
let newnumber = SNumber.reduce(function(acc,currval){
    // console.log(`acc:${acc} and currval ${currval}`);
    return acc+currval
},0)
// console.log(newnumber);


//arrow function
let bignumber = SNumber.reduce((acc,currval)=>{
    // console.log(`acc:${acc} and currval ${currval}`);
    return acc+currval
},3)
// console.log(bignumber);

// how to write it in arrow function
const mytotal =SNumber.reduce((acc, curr)=> acc+curr, 3)
console.log(mytotal);


// using reduce on Object
const shoppingCart = [
    {
        itemName:"JavaScripts",
        price:12000
    },
    {
        itemName:"Java",
        price:990
    },
    {
        itemName:"Web Development",
        price:1200000
    },
    {
        itemName:"React",
        price:4590
    },
    {
        itemName:"Angular",
        price:9892
    }
]
const newShooping  = shoppingCart.reduce((acc,item)=>acc + item.price, 0)

console.log(newShooping);