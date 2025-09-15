const form = document.querySelector("#form");
const text = document.querySelector("#text");
const area = document.querySelector("#area");
const ul = document.createElement("ul");
document.body.appendChild(ul);

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const title = text.value.trim();
    const body = area.value.trim();

    if(!title||!body){
        return;
    }

    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers:{ "Content-Type" : "application/json"},
            body: JSON.stringify({title,body,userId : 1})
        });
        const data = await res.json();
        render(data);
        form.reset();
    }
    catch(err){
        console.log(err);
    }
})

function render(arr){
   
        const li = document.createElement("li");
        li.textContent = `${arr.title}|| ${arr.body}|| ${arr.userId}`;
        ul.appendChild(li);
    
}


// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const textvalue = text.value.trim();
//     const areavalue = area.value.trim();

//     fetch("https://jsonplaceholder.typicode.com/posts",{
//         method: "POST",
//         headers : {
//             "Content-Type" : "application/json"
//         },
//         body: JSON.stringify({
//             title: textvalue,
//             body : areavalue,
//             userId: 1
//         })
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         render([data]);
//     })
//     .catch(err => console.log(err));
// });
