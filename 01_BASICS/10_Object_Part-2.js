// const tinderUser = new Object()
// we want to add aome item in the Empty Object than
const tinderUser = {};
tinderUser.id = "12@gm123"
tinderUser.name = "sumit"
tinderUser.School = "sssadan"
// console.log(tinderUser);


const regularUser = {
    email:"sumit@google.com",
    fullname:{
        userFullName:{
            firstName:"sumit",
            Lastname:"sharma"
        }
    }
}
// console.log(regularUser.fullname.userFullName.Lastname);


// i want to combine/Marge the object

const obj1 = {1:"sumit",  2:"Amit"};
const obj2 = {3:"Sakshi", 4:"Empty"};

const obj4 = Object.assign(obj1,obj2)// it use to join the object

const obj3 = {...obj1, ...obj2}// this is also good
// console.log(obj4);

const users = [
    {
        Id:"0191EE191055",
        name:"sumit"
    },
    {
        enail:"sumit@google.com"
    },
    {
        Destinicy:"hyper"
    }
]

console.log(users[1].Id);
console.log(tinderUser);
//we can finde keys from the array
console.log(Object.keys(tinderUser));
//we can aslso find values from the array
console.log(Object.values(tinderUser));
// find Entry
console.log(Object.entries(tinderUser));

// i we want to know value is present or not than wwe use 
console.log(tinderUser.hasOwnProperty('id'));


// In deeply learning you have to use  chrom inspect than use one Object and check prototype
/* This is all properties of Object
constructor()
hasOwnProperty()
isPrototypeOf()
propertyIsEnumerable()
toLocaleString()
toString()
valueOf()
defineGetter__()
__defineSetter__()
__lookupGetter__()
__lookupSetter__ 

*/
