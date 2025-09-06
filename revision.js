// phase 1 basics
let num1 = 40;
let num2 = 50;
let sum = num1 + num2;
console.log(`sum of the 2 numbers is ${sum}`);

// phase 2 control flow

let number = Math.floor(Math.random()* (10 -1 + 1)+ 1)
let counter = 0;
while(true){
let guess = prompt("number: ");
counter++;
if(Number(guess) > number){
    
    console.log("high");
}
else if(Number(guess) < number){
    
    console.log("low");
}
else{
    console.log("found", counter);
    break;
}
}
// phase 3 functions

const arr = [2,4,6,7,9,1];

function sum(array) {
    let sum = 0;
    array.forEach(element => {
        sum+=element;
        
    });
    return sum;
}

sum(arr);

const avg = (array)=>{
 let average = sum(array) / array.length;
 console.log(average);
}

avg(arr);

let str = "rohit";

const rev = (str) => {
    let newstr = "";
    for(let i = str.length -1 ;i >= 0;i-- ){
        newstr += str[i]
    }
    return newstr;
}

function fact(n){
    let result = 1;
    for(let i =0;i<=n;i++){
        result *=i;
    }
    return result;
}

function main(){
    sum([2,4,6,9,8]);
    avg(sum);
    rev("js");
    fact(4);

}
main();