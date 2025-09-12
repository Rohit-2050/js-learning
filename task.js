const form = document.querySelector("#form");
const tasks = [];
const ul = document.createElement("ul");
    document.body.appendChild(ul);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const task = document.querySelector("#task").value.trim();
    if(task === ""){
        return;
    }
    tasks.push(task);
    render(tasks)
    form.reset();
    console.log(tasks);
});


function render(arr){
    ul.textContent = "";

    arr.forEach((task,index )=>{

        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = task;
        ul.appendChild(li);
        li.appendChild(span);
        const del = document.createElement("button");
        del.textContent = "Delete";
       
        del.addEventListener("click",()=>{
            tasks.splice(index,1);
            render(tasks);
        });
        const com = document.createElement("button");
         com.textContent = "Complete";
        com.addEventListener("click",()=>{
            span.classList.toggle("complete");
        })
        
        li.appendChild(del);
         li.appendChild(com);
    });
}