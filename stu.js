const form = document.querySelector("#form");
const studentlist = [];
const ul = document.createElement("ul");
document.body.appendChild(ul);

function render(arr) {
  ul.innerHTML = ""; // clear old list

  arr.forEach(student => {
    const li = document.createElement("li");
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.setAttribute("indexvalue",index);
    li.textContent = `${student.name} -> ${student.mark}`;
    ul.appendChild(li);
    li.appendChild(remove);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const mark = Number(document.querySelector("#mark").value);

  const student = { name, mark };
  studentlist.push(student);
form.reset();
  render(studentlist);
});

ul.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
       const index = e.target.get
    }
})
