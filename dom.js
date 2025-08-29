const title = document.querySelector("#title");
console.log(title.textContent);
title.textContent = "My DOM Journey";
const paras = document.querySelectorAll(".para");
console.log(paras[1].textContent);
paras[2].textContent = "I am learning DoM DEEPLY";

paras.forEach((p,index)=> {
    console.log(` Index  ${index} -> ${p.textContent}`);
})

//attributes

const image = document.querySelector("#img");
image.setAttribute("src","new.png")
image.setAttribute("alt","new page loaded")
console.log();
console.log();

// classes and styles

const btn = document.querySelector("#btn");
btn.classList.add("highlight");
btn.style.color = "blue"

const msg = document.querySelector("#msg");
msg.classList.add("highlight");
msg.style.fontSize = "24px";