function addTwoNumber( num1 , num2){
    console.log(num1 + num2);

}
addTwoNumber(2,4);

const student = { 
    name: "rohit",
    age:20,
    skills: ["html","bootstrap","js","java","python"]
}

student.skills.push("flask");
student.skills.pop("bootstarp");
student.skills.replace("js","javascript");

let {name} = student;
let {skills} = student;
console.log(skills.includes("python"));

skills.forEach((skill)=>{
    console.log(skill);
})

const jsonit = JSON.stringify(student);

function printtentimes(){

    for(let i =0;i <=10;i++){
        console.log("I will not procrasinate");
    }
}

printtentimes();

function sumten(){
    let sum =0;
    for(let i =1;i<=10;i++){
        sum+=i;
    }
    console.log(sum);
}

function oddeven(){
    for(let i =1;i<=10;i++){
        if(i % 2== 0){
            console.log(`${i} is even`);
        }
        else{
            console.log(`${i} is odd`);
        }
    }
}

let multiplies = (num) => {
    let result;
for(let i =0;i<=10;i++){
    result = num * i;
    console.log(`${num} * i = ${result}`);
}
}

