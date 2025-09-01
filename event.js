// const btn = document.createElement("button");
// btn.textContent = "Hello";
// document.body.appendChild(btn);

// btn.addEventListener("click",()=>{
//     alert("hello World");
// });

// const input = document.createElement("input");
// document.body.appendChild(input);
// input.addEventListener("input",(event)=>{
//     console.log(event.target);
//     console.log(event.type);
//     console.log(event.key);
//     console.log(event.target.value);
// });

// //const ul = document.createElement("ul");
// document.body.appendChild(ul);
// const arr = ["item1","item2","item3"];
// arr.forEach((ara)=>{
    
//     const createli = document.createElement("li");
//     createli.textContent = `${ara} `;
    
//     const button = document.createElement("button");
//     button.textContent = "delete";
//     createli.appendChild(button);
//     ul.appendChild(createli);
// });

// ul.addEventListener("click",(event)=>{
//     if(event.target.tagName==="BUTTON"){
//     event.target.parentElement.remove();
//     }
// });

const todo = ["wake","brush","bath","study"];
const ul = document.createElement("ul");
document.body.appendChild(ul);

todo.forEach((item)=>{
    const li = document.createElement("li");
    li.textContent = item;
    const button = document.createElement("button");
    button.textContent = "Remove";
    ul.appendChild(li);
    li.appendChild(button);
    
});

ul.addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON"){
       e.target.parentElement.remove();
    }
})