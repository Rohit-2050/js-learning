let num1 = Number(prompt("enter 1st number"));
let num2 = Number(prompt("enter second number"));
let sum = num1 + num2;
console.log(sum);

let str = prompt("enter name");
let newstr = "";
for(let i =str.length -1;i>= 0;i--){
    newstr += str[i];
}
console.log(newstr);

const array = [2,4,6,7,8,9];

function toFindSum(arr){
    let sum = 0;
    arr.forEach(element =>{
        sum+=element;
    });
    return sum;
}

console.log(toFindSum(array));

function average(arr){
    let total = toFindSum(arr);
    let avg = total / arr.length;
    return avg;
}

console.log(average(array));

const arrayOfArrays = [[1,2],[3,4],[5,6]];

function nestedarray(arr){
    arr.forEach(innerarr =>{
        let sum =0;
        innerarr.forEach(element=>{
            sum += element;
        });
        console.log(sum + " ");
    })
}

nestedarray(arrayOfArrays);