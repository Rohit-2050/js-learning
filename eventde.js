const fruits = document.querySelector("#fruits");

fruits.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        console.log(e.target.textContent);
    }
    e.target.classList.toggle("list");
})