const marvelHeros = ["thor", "spiderman", "Ironman"];
const DC_Heroes = ["BatMan", "Antrman", "flash"];

// marvelHeros.push(DCHeroes);
// console.log(marvelHeros);//output is :- [ 'thor', 'spiderman', 'Ironman', [ 'BatMan', 'Antrman', 'flash' ] ] but we dont want array in side array
// console.log(marvelHeros[3]);// when i priint third element it is throw this [ 'BatMan', 'Antrman', 'flash' ]

const All_Heros = marvelHeros.concat(DC_Heroes);
// console.log(All_Heros);// it is give [ 'thor', 'spiderman', 'Ironman', 'BatMan', 'Antrman', 'flash' ] but this is not good way to marging Array 

// we have to use that is sprade Operator
const all_new_Heros = [...marvelHeros,...DC_Heroes];// Here we can Add multipals element but in concat method we can not add multipal Array
// console.log(all_new_Heros);//[ 'thor', 'spiderman', 'Ironman', 'BatMan', 'Antrman', 'flash' ]


//(1) if i want to add all Array in one array and the array is looks like nested Array 

const AnotherArray = [1,2,3,4,[4,5,6,7],[8,9],[1,3],[2,5]];
const Real_AnotherArray = AnotherArray.flat(Infinity);
console.log(Real_AnotherArray);


// (2) if i want to ask This is Array or not than 
console.log(Array.isArray("sumit"));
//this way we can check it is array or not


//(3). we want to convert string into array than 
console.log(Array.from("12345678910"));
//this way we can check it is way

//we can also pass more value
// if we give Array in object than it is confuse which item i make array ans it is return empty Array like:- 
console.log(Array.from({Name:"sumit"}))//output  is []

//
let Score1 = 100;
let Score2 = 200;
let Score3 = 300;

console.log(Array.of(Score1, Score2, Score3));

// Reade this is from or of




