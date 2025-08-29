// student Management System
let name = "rohit";
let age = 20;
let isactive = true;

if(age >= 18){
    console.log(`${name} is eligible for admission`);
}else{
    console.log(`${name} is no eligible`);
}

let students = [];

function adstu(name, age, isactive){
    const student = {
        name:name,
        age:age,
        isactive: isactive
    };
    students.push(student);
    console.log(`${name} is added successfully`)
}

adstu("suriya", 42,true);
console.log(students);

let marks = [41,77,98,55,62];

function average(marks){
    let sum =0;
    for(let i  =0;i<marks.length;i++){
        sum+=marks[i];
    }
    let avg = sum / marks.length;
    console.log(avg);
}

average(marks);
let names = ["rohit", "suriya", "rahul","ganpathi"];

function searchStudent(names, name){
    for(let i =0;i<names.length;i++){
        if(names.includes(name)){
            console.log(`${name} is available at ${i}`)
        }
    }
}

searchStudent(names,"rohit");

names.push("mark");
names.pop();
names.unshift("kingy");
names.shift();

const allnames = names.map(na => na);

const passed = marks.filter(mark => mark >=35);
const fail = marks.find(failed => failed < 35);
const anyfail = marks.some(failedlist => failedlist < 35 );

let student1 = {
    name: "rohit",
    age:20,
    marks:{
        sub1: 99,
        sub2:89
    }
};

let student2 = {
    name: "rohan",
    age:15,
    marks:{
        sub1: 19,
        sub2:29
    }
};

let merge = {...student1, ...student2};
console.log(merge);

const { name, marks } = merge;
console.log(name);   // rohan
console.log(marks);  // { sub1: 19, sub2: 29 }
