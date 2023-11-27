//  How to Dstructuring the Object
const Course = {
    Name:"Sumit",
    Id:"123ABC",
    Fees:999,
    CourseInstrctor:"Hitesh Chudhary"
}

// we can also fatch the data usign this way
// console.log(Course.CourseInstrctor  ); 


const {CourseInstrctor:instractor} = Course;

console.log(instractor);


//API'S
