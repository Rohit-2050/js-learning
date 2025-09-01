const input = document.querySelector("#input");
const btn = document.querySelector("#addtask");
const count = document.createElement("h6");
document.body.appendChild(count);
let counter = 0;


btn.addEventListener("click",()=>{
    
    const task = document.createElement("div");
    const span = document.createElement("span");
    const del = document.createElement("button");
    const edit = document.createElement("button");
    

    const taskitem = input.value.trim();
    span.textContent = taskitem;
    del.textContent = "Delete";
    
    if(taskitem === ""){
        return;
    }else{

        counter++;
        count.textContent = ` task count: ${counter}`
    document.body.appendChild(task);
    edit.textContent = "Edit"
    task.appendChild(span);
    task.appendChild(del);
    task.appendChild(edit);

    del.addEventListener("click",()=>{
        del.parentElement.remove();
        counter--;
        count.textContent = ` task count: ${counter}`
    })
    input.value = "";

    edit.addEventListener("click",()=>{
        if(edit.textContent === "Edit"){
            const inputfield = document.createElement("input");
            inputfield.value = span.textContent;
            task.replaceChild(inputfield,span);
            edit.textContent = "Save";
        }else{
            const inputfield = task.querySelector("input");
            span.textContent = inputfield.value;
            task.replaceChild(span,inputfield);
            edit.textContent = "Edit";
        }
    
})
}
});
input.addEventListener("keydown",(e)=>{
        if(e.key === "Enter"){
            btn.click();
        }
    });

