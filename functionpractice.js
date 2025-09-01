// //const students = [
//   { name: "Ravi", marks: [88, 76, 92] },
//   { name: "Anjali", marks: [45, 56, 67] },
//   { name: "Karan", marks: [90, 85, 93] },
//   { name: "Priya", marks: [55, 60, 58] }
// ];

 
function avg(student){
    let sum = 0;
    let {name , marks} = student;
    marks.forEach(mark => sum+=mark);
    const averrage = sum / marks.length;
    console.log(`${name}:${averrage}`);
}
students.forEach(avg);

const employees = [
  { name: "Alice", salaries: [25000, 27000, 29000] },
  { name: "Bob", salaries: [30000, 31000, 30500] },
  { name: "Charlie", salaries: [18000, 20000, 22000] },
  { name: "Diana", salaries: [40000, 42000, 41000] }
];

function sal(employee){
    let {name , salaries} = employee;
    let summ = 0;
    salaries.forEach(salaryy => summ+=salaryy);
    const avera = summ / salaries.length;
    
    if(avera > 30000){
        console.log(`${name}:${avera}(average salary)`);
    }
}

employees.forEach(sal);

const students = [
  { id: 101, name: "Ravi", marks: [88, 76, 92] },
  { id: 102, name: "Anjali", marks: [78, 82, 80] },
  { id: 103, name: "Karan", marks: [90, 85, 93] },
  { id: 104, name: "Priya", marks: [90, 85, 93] }, // Same avg as Karan
];
let topper = [];
function highavg(student){
    let {id, name , marks} = student;
    let sum = 0;
    marks.forEach(mark => sum+=mark);
    let avg = sum / marks.length;
    
    
        if(avg > 90){
            topper.push(name);
        }
    }


students.forEach(highavg);

let numberss = [2,4,5, 6,7,3];
let sum = 0;
function summm(){
  
  for(let i =0;i<numberss.length;i++){
    sum+=numberss[i];
  }
  console.log(sum);
}
summ(numberss);

const avgg = function(){

  let average = sum / numberss.length;
  console.log(avgeage);
}

avg(numberss);
let count =0;
const even = () => {
  numberss.forEach(num => {
    if(num % 2 === 0){
      count = count + 1;
    }
  });
}

even(numberss);

//const students = ["Rohit", "Aman", "Priya", "Sneha", "Kabir"];

students.forEach((student)=>{
  console.log(student.toUpperCase());
})

students.forEach((student,index)=>{
  console.log(`${student}: ${index}`);
})

const numbers = [3, 7, 12, 5, 20, 8];

const isEven = (num) => {num % 2 === 0}