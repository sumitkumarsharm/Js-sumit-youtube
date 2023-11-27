// Number

// Converting  to the String
const score = new Number(1029);
const newScore = score.toString();// usign this we can change the number to string now this variale we can use all string method
// console.log(newScore.length)
// console.log(newScore);
// console.log(typeof(newScore))


// Ggain converting to the Number   
//Number method
const NewScor = Number(newScore);// using this we can change the string to number agin
// console.log(NewScor);
// console.log(typeof(NewScor));
const other = 938.999;
// console.log(other.toFixed(3))// here we use the method to fixed the number when decemial value is present
const value = other.toPrecision(4);// it is give round of value
// console.log(value)

const number1 = 100000;
// console.log(number1.toLocaleString())// this use to counting simply numbers of zero

//++++++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-5));// give abslute value

console.log(Math.round(98.87));// it is give round value
console.log(Math.ceil(94.44));// 
console.log(Math.floor(65.999));
console.log(Math.min(2,3,4,5,6,7,9));// it is give small number in the array
console.log(Math.max(2,3,4,5,6,7,9));// it is give great number in the array
console.log(Math.sqrt(625));// to take squire roots

//Random()
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10 + 1))


const min = 15;
const max = 30;

console.log(Math.floor(Math.random()*(max-min + 1))+ min);