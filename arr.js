// to do list
const todo  = ["wakeup","learn js"," fresh up","go to office"];

todo.push("atttend meetings");
todo.splice(2,1,"exercise");
delete todo[0];
console.log(todo);

// adavnaced arr methods
const students = [
  { name: 'Rohit', marks: 85 },
  { name: 'Aarav', marks: 42 },
  { name: 'Kriti', marks: 95 },
  { name: 'Riya', marks: 33 },
  { name: 'Dev', marks: 55 }
];

function avg(arr){
    let sum =0;
    students.marks.forEach((mark)=> {
        sum+=mark;
    });
    let average = sum / students.marks.length;
    console.log(average);
}

avg(students);

const topper = students.filter(students.marks > 80);
console.log(topper);

const passed = students.filter(students.marks >= 35);
console.log(passed);

const hasfailed = students.some(students.marks < 35);
console.log(hasfailed);

const allclear = students.every(students.marks >= 35);
console.log(allclear);

const below40 = students.find(students.marks < 40);
console.log(below40);
