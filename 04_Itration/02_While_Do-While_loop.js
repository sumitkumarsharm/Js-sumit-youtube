let i = 0;
while (i<=10) {
    // console.log("this is a error",i);
    i = i+2;
}

let myArray = ['flash','batman','superman'];
let arr = 0
while (arr<myArray.length) {
    // console.log(myArray[arr]);
    arr = arr+1;
    
}



let score = 1
do {// in do while loop if condition is false than atleast one time it is running
    console.log(`score is ${score}`);
    score++
} while (score<10);