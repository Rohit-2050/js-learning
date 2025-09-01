const button = document.querySelector("#addpara");

button.addEventListener("click",()=>{
    const p = document.createElement("p");
    p.textContent = "Hello World!";
    document.body.appendChild(p);
    
})