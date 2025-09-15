// const form = document.querySelector("#form");
// const input = document.querySelector("#number");
// const comments = [];
const ul = document.createElement("ul");
document.body.appendChild(ul);
const filter = document.createElement("button");
filter.textContent = "Filter";
document.body.appendChild(filter);
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const inputvalue = input.value.trim();
//     fetch(`https://jsonplaceholder.typicode.com/comments?postId=${inputvalue}`)
//     .then(res => res.json())
//     .then(data => {
//         comments.length = 0;
//         data.forEach(d =>{
//             comments.push({
//                 id: d.id,
//                 name:d.name,
//                 email: d.email,
//                 body: d.body
//             });
//         });
//         render(comments);
//     })
// });

function render(arr){
    ul.innerHTML = "";
   arr.forEach(comm => {
     const li = document.createElement("li");
     li.textContent = `${comm.id}||${comm.name}||${comm.email}||${comm.body}`;
     ul.appendChild(li);
   })
}

filter.addEventListener("click",()=>{
    const filtered = comments.filter(c => c.email.endsWith("@sydney.com") );
    console.log(filtered);
    render(filtered);
})



const form = document.querySelector("#form");
const input = document.querySelector("#number");
const comments = [];

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputvalue = input.value.trim();
   try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${inputvalue}`);
        const data = await res.json();
         comments.length = 0;
        data.forEach(d=>{
           
            comments.push({
                id: d.id,
                name: d.name,
                email:d.email,
                body: d.body
            });
        });
        render(comments)
    }
    catch(error){
        console.log(error);
    }
})