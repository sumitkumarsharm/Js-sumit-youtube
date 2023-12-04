const book = [
    {title:'Book one', genre:'fiction', publish:1981,eddition:2023},
    {title:'Book two', genre:'Economic', publish:1889,eddition:2013},
    {title:'Book three', genre:'polity', publish:1950,eddition:2014},
    {title:'Book four', genre:'Geography', publish:1947,eddition:2015},
    {title:'Book five', genre:'History', publish:1966,eddition:2018},
    {title:'Book six', genre:'History', publish:1946,eddition:2024},
    {title:'Book seven', genre:'Economic', publish:1986,eddition:2019},
    {title:'Book eight', genre:'Geography', publish:1991,eddition:2020},
    {title:'Book nine', genre:'History', publish:1985,eddition:2021},
    {title:'Book ten', genre:'non-fiction', publish:1941,eddition:2022}
]

// let userBook = book.filter((bk)=>bk.genre == 'Geography');
// // console.log(userBook);
// console.log('this is a next line elemenr');
// userBook = book.filter((bk)=>bk.publish >= 1980);
// // console.log(userBook);
// console.log('this is a next line elemenr');
// userBook = book.filter((bk)=>bk.publish >= 1980);
// // console.log(userBook);

//not or and operator
let userBook = book.filter( (bk)=>{
    return bk.publish >= 1950 && bk.eddition >= 2018
})
console.log(userBook);