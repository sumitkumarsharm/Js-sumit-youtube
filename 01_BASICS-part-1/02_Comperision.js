console.log(null>0);
console.log(null==0);
console.log(null>=0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

console.log("2" === 2);


/*the reseon is that an equality check == and compairesin check >,<,>=,=< etc work both are differentily
comparions conver null to a number. treating it is 0 
that's why null >= 0 is true and null > 0 is false*/