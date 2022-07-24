

const num=Math.floor(Math.random()*10+1);   //produces random numbers from 1 to 10
let gusses=0;

document.getElementById("btn").onclick=function(){

    let a=document.getElementById("guess").value
    gusses+=1;

    if(a==num){
        alert(`you are correct, ${num} is the number`);
    }else if(a<num){
        alert(`Number is too small`);
    }else if(a>num){
        alert(`Number is too high`);
    }
}