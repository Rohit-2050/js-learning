// student management system

const student = {
    name:"rohit",
    rollno: 1,
    subjects:{
        english: 99,
        science: 77,
        math: 88
    }
};
console.log(student.name);
console.log(student.subjects.english);
student.subjects.history = 89;
student.subjects.english = 100;
delete student.subjects.english;
console.log()