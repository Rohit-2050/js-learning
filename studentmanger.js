const form = document.querySelector("#form");
const studentArr = [];
const ul = document.querySelector("#stulist");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const sub1 = document.querySelector("#sub1").value;
    const sub2 = document.querySelector("#sub2").value;
    const sub3 = document.querySelector("#sub3").value;

    let total = Number(sub1)+ Number(sub2)+ Number(sub3);
    const studentObj = {
        name : name,
        sub1: Number(sub1),
        sub2 : Number(sub2),
        sub3: Number(sub3),
        total: total
    }

    studentArr.push(studentObj);
    form.reset();
    render(studentArr);
});

function render(arr){
    const ul = document.querySelector("#stulist");
    ul.innerHTML = "";
    arr.forEach((student ,index) => {
        const div = document.createElement("div");
        ul.appendChild(div);
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = "remove";
        btn.dataset.index = index;
        li.textContent = `${student.name}: ${student.total}`;
        div.appendChild(li);
        div.appendChild(btn);
    })
}

ul.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
        const idx = e.target.dataset.index;
        
        studentArr.splice(idx,1);
        render(studentArr);
    }
});

ul.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("bg");
    }
});

const topper = document.createElement("button");
topper.textContent = "Show topper";
document.body.appendChild(topper);

topper.addEventListener("click",()=>{
const toppers = studentArr.filter(student => student.total >= 60);
render(toppers);
})


