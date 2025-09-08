const heading = document.querySelector("#heading");
const para = document.querySelector("#para");

heading.textContent = "DOM practice in progess";

para.style.color = "blue";

const fruits = ["Apple", "Banana", "Mango"];
const ul = document.createElement("ul");
document.body.appendChild(ul);
fruits.forEach(fruit => {
const li = document.createElement("li");
li.textContent = fruit;
ul.appendChild(li);
})
const button = document.createElement("button");
button.textContent = " Remove last";
document.body.appendChild(button);

button.addEventListener("click",()=>{
   if(ul.lastChild){
     ul.lastChild.remove();
   }
   if(!ul.lastChild){
    button.disabled = true;
   }
})