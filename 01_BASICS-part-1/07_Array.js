// Array :- The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
// 'Or'

//Array is the collection of hetroginouse datatype
//Ex - 
//1 way to declearing the array

let element = [20,10,3,44,63,553,'sumit',true,false,2.2];
console.log(element);

// Array is resizable in javaScripts
console.log(Array[8]);

// 2 way to declearing the array
const MyArray = new Array(2,3,4,5,6,'sumit',0.9);
console.log(MyArray);

// ++++++++++++++ Array Method +++++++++++++


element.push(7);// for adding the element 
console.log(element);
element.pop()// for removing the element
console.log(element);
element.unshift(7);// adding anything first in the array than we use unshift
console.log(element);
element.shift()// removeing the element first index
console.log(element);
console.log(element.includes(20));// include is use to check element is prsent or not
console.log(element.indexOf(0.9));// to check the element is in array are which index

const myStr = element.join("-")// it is join the element on the basis of -, _, space, etc and it is convert the array into string.
console.log(myStr);



// Slice :- The method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const  NewArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(NewArray);

const NewArr1 = NewArray.slice(1,5);
console.log(NewArr1);
console.log(NewArray);

// splice :- To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, 
const NewARRAY2 = NewArray.splice(1,5);
console.log(NewARRAY2);
console.log(NewArray);