let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let sum = num1 + num2 ;
console.log(`the sum is ${sum}`);

// loops and indexing

let str = prompt("Enter a input");

let newstr = "";

for(let i = str.length -1;i>=0;i--){
    newstr+=str[i];
}

const arr = [[1,2],[3,4]];
function sumOfEach(arr){
    arr.forEach(a =>{
        let sum = 0;
        a.forEach(inner => {sum += inner
        }
        );
        console.log(sum);
    });
}

const numbers = [2,4,6,7,8,9];
function toFindSum(arr){
    let sum =0;
    arr.forEach(number =>{
        sum+=number;
    })
    return sum;
}
toFindSum(numbers);

function average(arr){
    let avg = toFindSum(arr)/arr.length;
    return avg;
}
average(numbers);

//nested array
const students = [
    {
        name: "rohit",
        marks:[99,22,89]
    },{
        name:"neeli",
        marks:[44,66,77]
    },{
        name:"chnadra",
        marks:[33,55,88]
    }
];

function avgPerStudent(arr){
    students.forEach(stu =>{
        let sum = 0;
        stu.marks.forEach(mark => sum+=mark);
        let avg = sum / stu.marks.length;
        console.log(`${stu.name}: ${avg}`);
    })
}