function MyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("I");
    console.log("T");
}

// MyName()


//Way first
// function AddtwoNum(a,b){
//     return a+b;
// }

// console.log(AddtwoNum(12,13));

//way Second
function Add(num1, num2){
    // let result = num1+num2;
    // return result
    // console.log("Sumt Sharma");// when ever we write somthing after the return thanit is not execute 
    //also we can 
    return num1+num2
}

let result = Add(12,14)
console.log("result" , result);

//Make user loggin alert

function LogginUser(Username = "sumi"){// if we want to give defeult value
    // if(Username === undefined)// also this way
    if(!Username)// we can also write this way
    {
        console.log("Please Enter Usernsme")
        return
    }else{
        return  `${Username} just logged in`
    }
            
}

console.log(LogginUser("sumit"));//it is return : sumit just logged in
console.log(LogginUser(""));// now it is return : just logged in
console.log(LogginUser())// it is return : undefined just logged in

