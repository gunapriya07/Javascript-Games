const computerChoicedisplay=document.getElementById("computer_choice");
const UserChoicedisplay=document.getElementById("user_choice");
const resultdisplay=document.getElementById("result");

const possibleChoices=document.querySelectorAll("button");
let userchoice;
let computerchoice;
let result;

possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener("click",(e)=>{
    userchoice=e.target.id;
    UserChoicedisplay.innerHTML=userchoice;

    generateComputerChoice()
    getResult();
}))

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1; 
    console.log(randomNumber);
    if(randomNumber===1){
        computerchoice='rock';
    }
    if(randomNumber===2){
        computerchoice='Paper';
    } 
    if(randomNumber===3){
        computerchoice='Scissors'
    }
    computerChoicedisplay.innerHTML=computerchoice;
}

function getResult(){
    if(computerchoice===userchoice){
        result='Its a draw';
    }else if((userchoice==="rock" && computerchoice==='Scissors')|| (userchoice==='Scissors' && computerchoice==='paper') || (userchoice==="rock" && computerchoice==='Scissors')){
        result="You Win!";
    }else{
        result="You lose!";
    }
    resultdisplay.innerHTML=result;
}
    






