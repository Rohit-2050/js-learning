const ul = document.createElement("ul");
document.body.appendChild(ul);

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => 
{
    for(let i =0;i<5;i++){
        const li = document.createElement("li");
        li.textContent = `${data[i].title} || ${data[i].body}`
        ul.appendChild(li);
    }
}
)
.catch(err => console.log(err));