const students = [
  { id: 1, name: "Rohit", marks: 85 },
  { id: 2, name: "Aman", marks: 45 },
  { id: 3, name: "Neha", marks: 72 },
];

const div = document.querySelector("#student-list");
const topper = document.querySelector("#show-toppers");

const ul = document.createElement("ul");
div.appendChild(ul);
students.forEach(student => {
    const li = document.createElement("li");
    li.textContent = student.name;
    ul.appendChild(li);
});

topper.addEventListener("click",()=>{
    div.textContent = "";
    const toppers = students.filter(student => student.marks >= 60);
    const ul = document.createElement("ul");
div.appendChild(ul);
toppers.forEach(student => {
    const li = document.createElement("li");
    li.textContent = student.name;
    ul.appendChild(li)
})
})