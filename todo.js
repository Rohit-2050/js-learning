const task = document.querySelector("#task");
const createbtn = document.querySelector("#createbtn");
const list = document.querySelector("#list");

createbtn.addEventListener("click", (e) => {
    const taskvalue = task.value.trim();
    if (taskvalue === "") {
        return;
    }

    const taskitem = document.createElement("div");
    taskitem.classList.add("p-2", "mb-2", "border", "d-flex", "justify-content-between", "align-items-center");

    const span = document.createElement("span");
    span.textContent = taskvalue;

    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.classList.add("btn", "btn-danger", "btn-sm");

    delbtn.addEventListener("click", () => {
        taskitem.remove();
    });

    taskitem.appendChild(span);
    taskitem.appendChild(delbtn);
    list.appendChild(taskitem);

    task.value = "";
});
