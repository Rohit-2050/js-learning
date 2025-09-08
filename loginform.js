const form = document.querySelector("#form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const usernmae = document.querySelector("#username").value;
    console.log(usernmae);
    if(usernmae === ""){
        alert("username cannot be emty");
    }
    const password = document.querySelector("#password").value;
    if(password.length < 6 ){
        alert("password should be more than 5 characters");
    } 
})