const fact = (number) =>{
    let result = 1;
    for(let i =2 ;i<=number;i++){
        result*=i;
    }
    return result;
}

const rev = (number)=>{
    let reversed = "";
    number = String(number);
    for(let i =number.length-1;i>= 0;i--){
        reversed += number[i];
        
    }
    reversed = Number(reversed);
    return reversed;
}

function main(){
    let number = Math.floor(Math.random() * (10 - 1 + 1)+ 1);

let counter = 0;
while(true){
    let guess = Number(prompt("Enter ur guess"));
    counter++;
    if(guess > number){
        console.log("high");
    }
    else if(guess < number){
        console.log("low");
    }
    else{
        console.log(`guessed right at ${counter} attempt`);
        break;
    }
}


console.log(fact(number));

console.log(rev(number));
}