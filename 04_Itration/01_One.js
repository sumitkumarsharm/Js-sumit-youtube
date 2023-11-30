// for loop
// let array = [1,2,3,4,5]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
//     console.log(element);   
// }

// for (let i = 0; i <= 20; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("five is best");
//     }
//     console.log(element);
    
// }
// if i access it outside the function than 
// console.log(element);//ReferenceError: element is not defined becouse we print outside the scope 

// for (let i= 1; i < 10; i++) {
//     // console.log(`Table of ${i}`)
//       for (let j = 1;  j < 10; j++){
//         // console.log(`inner loop ${j} and inner loop ${i}`);
//         // console.log(i + '*'+ j +'='+ i*j);
    
    // }
// }


// let MyArray = ['flash', 'batman', 'superman'];
// // console.log(MyArray.length);
// for (let index = 0; index < MyArray.length; index++) {
//    const element = MyArray[index];
//   //  console.log(element);
// }

//Break and Continue

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   if (element == 5) {
//     console.log("detected 5");
//     break;
//   }
//   console.log(`value of i is ${element}`);
// }


for (let index = 0; index <= 20; index++) {
  const element = index;
  if (element == 5) {
    console.log("detected 5");
    continue;// whenever i use continue it is skip the value and move forword to next value
  }
  if (element == 15) {
    console.log("15 is Giveing Error There is Veirouse");
    console.log("End The Loop");
    break;
  }
  console.log(`value of i is ${element}`);
}