const students = [
    {
        name: "rohit",
        age: 20,
        marks: [ 99,89,100]
    },
    {
        name: "neeli",
        age: 32,
        marks: [ 79,29,100]
    },
    {
        name: "tovino",
        age: 40,
        marks: [ 39,82,100]
    }

]

function avg(){
   
    students.forEach(s=>{
         let total = 0;
       s.marks.forEach(mark => total+= mark) ;
       let average = total / s.marks.length;
       console.log(`${s.name}: ${average}`);
    })
}

function add(name,age, mark){
    students.push({
        name: name,
        age: age,
        marks: mark
    });
    console.log(`${name} is added`);
}

