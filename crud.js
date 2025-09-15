const get = document.querySelector("#get");
const post = document.querySelector("#postform");
const update = document.querySelector("#updateform");
const deleteform = document.querySelector("#deleteform");
const ul = document.createElement("ul");
document.body.appendChild(ul);
let get5data = [];

// get data

get.addEventListener("click",async (e)=>{
   try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
   const data = await res.json();
   console.log(data);
   get5data = data.slice(0,5);
   render(get5data);
   }catch(err){
    console.log(err);
   }

});

function render(arr){
    ul.innerHTML = "";
    arr.forEach(a=>{
        const li = document.createElement("li");
        li.textContent = `id: ${a.id}||Title: ${a.title}|| body:${a.body}`;
        ul.appendChild(li);
    })
}

post.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const title = document.querySelector("#title").value.trim();
    const body = document.querySelector("#body").value.trim();

    try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
           method: "POST",
           headers: {"Content-Type":"application/json"},
           body: JSON.stringify({title,body})

        });
        const data = await res.json();
        console.log(data)
        get5data.push(data);
        render(get5data);
        post.reset();
    }
    catch(err){
        console.log(err);
    }
})