let username = "rohit";
const bornYear = 2005;
var userpet = null; // var is outdated dont use it 

console.log("username"+username);
console.log(bornYear);

/*
      datatypes in javascript
number 
bigint -> bigger than number
string -> ""
boolean-> true/false
undefined -> not decleared
null -> a value
object
*/

//datatype conversion
let score = "33";
score = String(score);
console.log(typeof score); //string

score = Number(score);
console.log(typeof score); // number

score = 1;
score = Boolean(score);
console.log(score) //true
console.log(typeof score);

// operations -> + , - ,*,** power, / , % mod, --a ++a pre increment and pre decrement ,  a++ a--
let str1 = "ro";
let str2 = "hit";
str3 = str1 + str2;
console.log(str3);//rohit
console.log(1+"2") //12
console.log("1"+ 2 + 2); //122
console.log(1+2+"3")//33

// based on call by value and call by reference datatypes are 2 types
// primitive call by value - > stored in stack -> gets a copy n cannot change original
// non primitive call by reference -> stored in heap -> gets reference n can change the original
//primitve -> string , number , boolean, bighint, null, undefiend,symbol
// non primitve -> array , fucntion, objects

// string 
let name = "rohit";
console.log(`hello ${name}`); //template literal
name = "ro";
console.log(name);
// string methods
let bio = " I am Rohit, The GOAT ";
console.log(bio.trim());
console.log(bio.toLowerCase());
console.log(bio.includes("goat"));
console.log(bio.slice(0,9));
console.log(bio.replace("goat","legend"));