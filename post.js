fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({
        name: "rohit",
        age: 20,
        branch: CSE
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error));