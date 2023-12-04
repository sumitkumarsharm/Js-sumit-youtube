// For Each loop

// let's use forEach loop on array
const coding = ['python', 'ruby', 'C++', 'C', 'Java'];
// coding.forEach( function name(define){        
// })//for each loop takes call back function :- we can not use simple function we have to use call back function


//we can also take all parems like key value 
coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})

// we have to use this way 1
// coding.forEach( function (item) {
        // console.log(item);
// })


//we can also use arrow funtion
coding.forEach((value)=>{
    // console.log(value);
})

// we can also use this function
function printMe(val){
    // console.log(val);
}
coding.forEach(printMe);

// let use forEach loop on Map
const map = new Map()
map.set('ind','india')
map.set('USA','united state of America')
map.set('NP','Nepal')
map.set('UNA','United state of Arab')

map.forEach(function (cell){
    // console.log(cell);
})
// it is allow to use forEach method on map  function

map.forEach(function (value,key, map){
    // console.log(`${key} is = ${value}`);
})

// Que. :- there is an Array and inside the array there is so many objects
//lets check what is output
// [{},{},{},{}]
// task is we have to find the object item

const MyArray = [
    {
        languageName:'JavaScripts',
        languageFileName:'NewJavaScripts',
        languageCode:'Java',
        
    },
    {
        languageName:'C++',
        languageFileName:'secret',
        languageCode:'C',
        
    },
    {
        languageName:'Python',
        languageFileName:'Allow',
        languageCode:'Decturanary',
        
    },
    {
        languageName:'Java',
        languageFileName:'Array files',
        languageCode:'Dom',
        
    }
]

MyArray.forEach((del)=>{
    console.log(del.languageFileName,del.languageCode);// we can give multipal task in the console
})


// lets use Object using forEach Loop
// const MyObj = {
//     name:'sumit',
//     id:'091',
//     class:'09'
// }
// MyObj.forEach((obj) =>{
//     console.log(obj);
// })

