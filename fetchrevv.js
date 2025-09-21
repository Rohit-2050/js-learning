document.addEventListener("DOMContentLoaded",()=>{
    console.log("dom");
const ul = document.querySelector("#postlist");
const get = document.querySelector("#get")
// get then 

// get.addEventListener("click",(e)=>{
//     e.preventDefault();
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     render(data)
// })
// .catch(err => {
//     console.log(`error is  ${err}`)
// });
// })

async function getdata(){
    try{
        const res =  await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5",{
        method:"GET"
    })
    const data =  await res.json()
    render(data);
    }
    catch(err){
        console.log(err);
    }
}

get.addEventListener("click",(e)=>{
    e.preventDefault();
    getdata();
})

//post 

const title = document.querySelector("#title");
const body = document.querySelector("#body");
const post = document.querySelector("#post");

post.addEventListener("click",(e)=>{
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            title: title.value,
            body: body.value,
            userId:1
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
})

async function posst(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/post",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                title:title.value,
                body:body.value,
                userId:1
            })
        })
        const data = res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

//render function
function render(arr){
    ul.innerHTML = "";
    arr.forEach(post => {
        const li = document.createElement("li");
        li.textContent = `id: ${post.id} title: ${post.title}`;
        ul.appendChild(li);
    })
}
})