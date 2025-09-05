const student = {
    name: "rohit",
    age: 20,
    courses: ["cn","dbms","dsa"],
    ishosteller: true
}

let jsonnified = JSON.stringify(student);
console.log(jsonnified);

let obj = JSON.parse(jsonnified);
console.log(obj);