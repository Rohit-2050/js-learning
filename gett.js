const form = document.querySelector("#form");
const id = document.querySelector("#id");
const btn = document.querySelector("#btn");
const container = document.createElement("div");
document.body.appendChild(container);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const idinput = id.value.trim();
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${idinput}`)
    .then(res => res.json())
    .then(data =>{
         container.innerHTML = "";
        if(data.length === 0){
            alert("no comments found");
        }
        data.forEach(value =>{
           
            const p = document.createElement("p");
            p.textContent = `name: ${value.name} && email: ${value.email}`;
            container.appendChild(p);
        })
    })
    .catch(err => console.log(err));
    
})