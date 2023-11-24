let MyDate = new Date();
console.log(MyDate.toDateString()); // this is give => Thu Nov 23 2023

console.log(MyDate.toISOString());// this is give => 2023-11-23T20:24:49.883Z

console.log(MyDate.toLocaleDateString());// this is give => 11/23/2023

console.log(MyDate.toLocaleString());// this is give =>  11/23/2023, 8:24:49 PM

console.log(MyDate.toLocaleTimeString());// this is give => 8:24:49 PM

console.log(MyDate.toString());// this is give => Thu Nov 23 2023 20:24:49 GMT+0000 (Coordinated Universal Time)

console.log(MyDate.toTimeString());// this is give => 20:24:49 GMT+0000 (Coordinated Universal Time)

console.log(MyDate.getTimezoneOffset())// this is give => 0

console.log(MyDate.toUTCString())// this is give => Thu, 23 Nov 2023 20:29:47 GMT

console.log(typeof MyDate);// date is an Object


// if we write  
let Date = new Date(); // this will give current time and date
// but we can also give command to change date in prenthesis()
let Adates = new Date(2023,11,17);
console.log(Adates.toDateString());//it is return Tue Jan 17 2023
// in java scripts months is starting from 0 to 11

// we can also pass time and if you want to specifice value yoou can also do this way
let Ddates = new Date(2023,11,17,14, 45, 2);
console.log(Ddates.toLocaleString());// it is return => 12/17/2023, 2:45:02 PM
console.log(Ddates.toDateString());//Sun Dec 17 2023

// if you want specialy mm-dd-yy date like than we use quote(" ")
let mewDate = new Date("02-02-2023");
console.log(mewDate.toDateString());
console.log(mewDate.toLocaleString());


// ++++++ TIMESTAMPS +++++

let mytimestamp = Date.now();
console.log(mytimestamp);
// if want to know time in milisecond
console.log(mewDate.getTime());
// i want to convert milisecond to second
console.log(Math.floor(Date.now()/1000));


let sumit = mewDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric"
})
console.log(sumit);
