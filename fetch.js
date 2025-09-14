async function getpost(){

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    console.log(data);
    for(let i =0;i<5;i++){
        const li = document.createElement("li");
        li.textContent = `title: ${data[i].title}and body: ${data[i].body}`;
        ul.appendChild(li);
    }
}
getpost();