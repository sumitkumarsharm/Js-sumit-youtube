// for of loop
// For_of loop mainly use on Array Object, String, number etc
// 
// const myArray = [1,2,3,4,5,6,7,8,89,9];
// for (const i  of myArray) {
//     console.log(i);
// }


// for of loop using on loop
const greet  = "Sumit sharma"
for (const greeting of greet) {
    if(greeting == " "){        
        continue;
    }
    // console.log(`Each char is ${greeting}`);
}


// Operations on String using if else condition
for (const freeding of greet) {
    if (freeding == "S") {
        // console.log("A");
        continue;
    }
    if (freeding == " ") {
        continue;
    }if (freeding == "u") {
        continue;
    }

    // console.log(freeding);
    
}


//Map Function

const map = new Map();
map.set('roll1','shani')
map.set('roll12','sumit')
map.set('roll3','Manish')
map.set('roll4','Amit')

//print Map basic
// console.log(map);
// console.log(map.get('roll12'));

// we can fatch the data by using key
// console.log(map.get('roll1'));

// console.log(map.get('roll1','roll12'));// if you want to fatch the multipal value using backtics or multipale key it is not giveinng error
// console.log(`The Size of the all map ${map.size}`);

// we deletion of the map function
// map.delete('roll12');
// console.log(map.get('roll12'));



// let use loop on map
// print all iteam using map function that is present in the map function
// for (const maps of map) {
//     console.log(maps);  // her it is printing all map item  
// }


// // if i want to print only value using for_of loop
// for (const [key,value] of map) {
//     console.log(value);
// }


// // if i want to print only key using for_of loop
// for (const [key,value] of map) {
//     console.log(key);
// }

// // i want to print both key or value
// for (const [key,value] of map) {
//     console.log(`the key name is ${key}, the Value name is ${value}`);
// }



// if use for_of loop on object 
// for of loop is working or not in array
// const myObj = {
//     'game1':'gfg',
//     'game2':'gta',
//     'game3':'hello',
//     'game4':'snake'
// }

// for (const [key,vlaue] of myObj) {
//     console.log(key, vlaue);// is is showing TypeError: myObj is not iterable
// }
// we can itrate the object using another method not this using for of loop
