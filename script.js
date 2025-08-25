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

let str = " I am GOAT";
console.log(str.trim().toLowerCase().replace("goat","legend").includes("legend"));

// numbers 
let num = " 56.789 ";
// let result = num.trim().isInteger();
// console.log(result);
// console.log(num);
// let rounded = num.toFixed(2);
// console.log(rounded);

//math
// let ran = Math.floor(Math.random()* (50 -1 +1)+1);
// console.log(ran);
// if(ran % 5 === 0){
//       return "multiple of 2";
// }
// else{
//       return "not a multiple";
// }
// array
const arr1 = [1,2,3];
console.log(arr1);
arr1.push(4);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.unshift(0);
console.log(arr1);
arr1.shift();
console.log(arr1);

let marks = [67.5, 89.2, 45.3, 78, 92.6];
console.log(marks.length);
console.log(marks[0]);
console.log(marks[-1]);
let sum = 0;
let avg = 0;
for(let i =0;i<marks.length;i++){
    marks[i] = Math.floor(marks[i]);
      sum += marks[i];
      console.log(sum);
      avg = sum / marks.length
      console.log(avg.toFixed(2));
}

const student = {
  name: "Riya",
  age: 21,
  skills: ["HTML", "CSS", "JavaScript"]
};

student.skills.push("bootstrap");
console.log(student.skills[skills.length -1 ]);
student.skills.replace("css","tailwind");

const studentdata = {
  name: "rohit",
  rollno: 107,
  marks: [99,98,92,91,95],
  skills: ["py","js","html","bootstrap"],
  isactive: true
}

studentdata.skills.push("SQL");
let sums = 0;
let avgs = 0;

for(let i =0;i<marks.length;i++){
sum += marks[i];

}
avg = sum / marks.length;
if(avg > 90){
studentdata.grade = "A";
}
else{
  studentdata.grade = "B";
}