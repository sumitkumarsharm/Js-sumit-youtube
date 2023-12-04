// Reduce function
const  SNumber = [1,2,3]
let newnumber = SNumber.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval ${currval}`);
    return acc+currval
},0)
console.log(newnumber);

//arrow function
let bignumber = SNumber.reduce((acc,currval)=>{
    console.log(`acc:${acc} and currval ${currval}`);
    return acc+currval
},0)
console.log(bignumber);