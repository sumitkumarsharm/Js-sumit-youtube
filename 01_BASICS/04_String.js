// Declearing the String

const Name = "sumit";
const repoCount = 40;
// console.log(Name + repoCount); don't do this this is bad prectice
console.log(`hello my is name ${Name.toUpperCase()} this is my repocount ${repoCount}`);

const gameName = new String('hitesh-hc');
// console.log(gameName);
// console.log(gameName.length);// for checking the length
// console.log(gameName.charAt[4]);// what item on the index number
// console.log(gameName.toLowerCase());// it is use to convert the string into lowercase
// console.log(gameName.toUpperCase()); // it is use to convert the string tp upper case
// console.log(gameName.concat("sumit"));// this is use to add some string to the item
// console.log(gameName.endsWith('s'));// it is use to check what letter to end the word
// console.log(gameName.includes('o'));// it is also check to the word is include or not
// console.log(gameName.indexOf('h'));// to check which index whose item


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString1 = "                  sumit               ";
const anotherString1 = newString1.trim();// this is use to removve the space 
console.log(newString1);
