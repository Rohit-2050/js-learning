
for(let i =0;i<3;i++){
    const card = document.createElement("div");
    document.body.appendChild(card);

const span = document.createElement("span");
span.textContent = "I am inside card";
card.appendChild(span);

const btn = document.createElement("button");
btn.textContent = "click me";
card.appendChild(btn);

btn.addEventListener("click",(event)=>{
    event.target.parentElement.remove();
   
})
}


