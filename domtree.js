const lang = document.querySelector("#langs");
console.log(lang.parentElement);
console.log(lang.firstElementChild);
console.log(lang.firstElementChild.nextElementSibling);

const py = document.createElement("li");
py.textContent = "python";
ul.appendChild(py);

const cpp = document.createElement("li");
cpp.textContent = "c++";
ul.prepend(cpp);

const tailwind = document.createElement("li");
tailwind.textContent = "tailWind";
cpp.replaceWith(tailwind);

const techs = ["HTML", "CSS", "JS"];
const ul = document.createElement("ul");
document.body.appendChild(ul);
const heading = document.createElement("li");
heading.textContent = "technologies";
ul.appendChild(heading);
techs.forEach((tech,index)=>{
    const create = document.createElement("li");
    create.textContent = `${tech}`;
    ul.appendChild(create);
});

const csschild = ["flex","color","bgcolor"];


const cssaccess = Array.from(ul.children).find(li => li.textContent === "css");
if(cssaccess){
    const createsub = document.createElement("ul");
    csschild.forEach((sub)=>{
        const subLI = document.createElement("li");
        subLI.textContent = sub;
        createsub.appendChild(subLI);
    });
    cssaccess.appendChild(createsub);
}

const fruits = ["Apple", "Banana", "Mango", "Orange"];

const fruitlist = document.createElement("ul");
document.body.appendChild(fruitlist);
fruits.forEach((fruit)=>{
    const fruli = document.createElement("li");
    fruli.textContent = `${fruit}`;
    fruitlist.appendChild(fruli);
});
const heading = document.createElement("li");
heading.textContent = "my fav fruits";
fruitlist.prepend(heading);

const newfruit = document.createElement("li");
newfruit.textContent = "grapes";
const mango = Array.from(fruitlist.children).find(li => li.textContent === "Mango");
mango.before(newfruit);

const nested = ["Cavendish", "Lady Finger"];
const nestedul = document.createElement("ul");
const ban = Array.from(fruitlist.children).find(li => li.textContent === "Banana");
ban.appendChild(nestedul);
nested.forEach((nest)=>{
    const nestedli = document.createElement("li");
    nestedli.textContent = `${nest}`;
    nestedul.appendChild(nestedli);
});

const org = Array.from(fruitlist.children).find(li => li.textContent === "Orange");

org.textContent = "pineapple";