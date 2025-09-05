const form = document.querySelector("#form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const user = {
        
        email:email,
        password:password
    };

    let jsondata = JSON.stringify(user);

    fetch("https://reqres.in/api/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },body: jsondata
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const innerdiv = document.createElement("div");
        
        innerdiv.textContent = `${data.id} and ${data.token}`;
        document.body.appendChild(innerdiv);

    }
    
)
    .catch(error => console.log(error));

})