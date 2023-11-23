// Declearing the String
/*
TODO JALDI KRNA HAI

 
length():- to know the length of the string than w use length method
        EX-const Name = "sumit";
           const repoCount = Name.length;
           console.log(repoCount);


at() :- it is use to know that what item present in which element and it is take integer value
        Ex- const sentence = 'The quick brown fox jumps over the lazy dog.';
            console.log(`An index of ${4} returns the character ${sentence.at(4)}`)

big():- The code below creates an HTML string and then replaces the document's body with it.

blink() :- The code below creates an HTML string and then replaces the document's body with it.

bold()
charAt()
charCodeAt()
codePointAt()
concat()
String()
endsWith()
fixed()
fontcolor()
fontsize()
includes()
indexOf()
isWellFormed()
italics()
lastIndexOf()
link()
localeCompare()
match()
matchAll()
normalize()
padEnd()
padStart()
repeat()
replace()
replaceAll()
search()
slice()
small()
split()
startsWith()
strike()
sub()
substr()
substring()
sup()
toLocaleLowerCase()
toLocaleUpperCase()
toLowerCase()
toString()
toUpperCase()
toWellFormed()
trim()
trimEnd()
trimStart()
trimEnd()
trimStart()
valueOf()
*/







const Name = "sumit";
const repoCount = 40;
// console.log(Name + repoCount); don't do this this is bad prectice
// console.log(`hello my is name ${Name.toUpperCase()} this is my repocount ${repoCount}`);

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
// console.log(newString);

const anotherString = gameName.slice(-8,4);
// console.log(anotherString);

const newString1 = "                  sumit               ";
const anotherString1 = newString1.trim();// this is use to remove the space 
// console.log(newString1);
const url = "https://sumit.com/sumit%20sharma"
const url2 = url.replace('%20','_')//replace is use for replaceing somthing that you don't need
// console.log(url2);

let sumit = url.includes('sumit');
// console.log(sumit);

let Name2 = new String('sumit-aman-naman')
let name3 = Name2.split(',')
// console.log(name3);