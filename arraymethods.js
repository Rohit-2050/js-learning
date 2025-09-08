const arr = [5,10,15,20];
const div = arr.map(n=>n / 5);
const aboveto = arr.filter(n=>n >2);
const red = arr.reduce((acc,curr)=>{ return acc + curr
},0);
const some = arr.some(n=> n >3);
const ever = arr.every(n=>n>1);
const fin = arr.find(n => n>2);
const findind = arr.findIndex(n=>n > 10);

console.log(div);
console.log(aboveto);
console.log(red);
console.log(some);
console.log(ever);
console.log(fin);console.log(findind);

const arrobjects = [ {name:'A',score:90}, {name:'B',score:50} ];

const toppers = arrobjects.filter(n=>n.score >= 60);
const names = arrobjects.map(n=>n.name);
const total = arrobjects.reduce((acc,cur)=>{
    return acc +  cur.score;
},0);

console.log(names);
console.log(toppers);
console.log(total);