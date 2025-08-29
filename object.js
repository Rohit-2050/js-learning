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

// advanced objects
const userInfo = { name: "Bob", age: 25 };
const userJob = { job: "Developer", city: "Berlin" };

const user = {...userInfo , ...userJob};
console.log(user);

const {name , job} = user;

for(const [key,value] of user.entries(data)){
    console.log(`${key}:${value}`);
}