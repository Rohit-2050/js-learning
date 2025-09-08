const car = {
    brand: "Audi",
    model: "A8",
    year: 2020
};

console.log(car["brand"]);
console.log(car.model);
console.log(car.year);

car.color = "red";
car.year = 2025;
delete car.color;

console.log(car);

//looping
const book = {title:"JS Basics", pages:200, price:350}

for(let key in book){
    console.log(`${key}:${book[key]}`);
    console.log(Object.keys(book));
    console.log(Object.values(book));
    console.log(Object.entries(book));
}


const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 120 },
  { id: 3, name: "Pen", price: 20 }
];

console.log(products[1].name);
const fil = products.filter(n=>n.price > 100);
const mapp = products.map(n=>n.name);
console.log(fil);
console.log(mapp);

const student = { id: 1, name: "Rohit", score: 95 };

const stuJson = JSON.stringify(student);

const obj = JSON.parse(stuJson);

const students = [
  { id: 1, name: "Rohit", marks: 85 },
  { id: 2, name: "Aman", marks: 45 },
  { id: 3, name: "Neha", marks: 72 },
  { id: 4, name: "Priya", marks: 95 },
  { id: 5, name: "Karan", marks: 60 }
];

console.log(students[2].name);
const aboveavg = students.filter(n => n.marks >= 60);
console.log(aboveavg);
const names = students.map(n=>n.name);
console.log(names);
const highest = students.reduce((acc,cur)=>
  { return acc.marks > cur.marks ? acc : cur; }, students[0]);
console.log(highest);

const sorting = students.sort((a,b)=> b.marks - a.marks);
console.log(sorting);
students.push({
  id: 6, name: "Vikram", marks: 80
});
console.log(students);

const jsonify = JSON.stringify(students);
console.log(jsonify);
const obje = JSON.parse(jsonify);
console.log(obje);