const span = document.querySelector("#span");

let count = 0;
span.textContent = count;

const plus = document.querySelector("#plus");

const minus = document.querySelector("#minus");

plus.addEventListener("click",()=>{
    
    count++;
    span.textContent = count;
});

minus.addEventListener("click",()=>{
    if(count > 0){
    count--;
    }
    span.textContent = count;
})