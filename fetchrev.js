fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => console.log(data))
.catch(err=>console.log(err));

async function fetchdata(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
}
fetchdata();

//post 
const data = {name:"rohit",age:20}
fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

async function postt(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    const data = await res.json();
    console.log(data);
    }
    catch(err){
        console.log(err);
    }

}

//put
const updateddata = {name:"rohit",age:21};

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(updateddata)

})
.then(res => res.json())
.then(data => console.log(data))
.catch(err=> console.log(err));

async function putt(){
    try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(updateddata)
    })
    
        const data = await res.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
//del

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"DELETE"
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));


async function delteing(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
            method:"DELETE"
        })
        const data = await res.json();
        console.log(data)

    }
    catch(err){
        console.log(err);
    }
}