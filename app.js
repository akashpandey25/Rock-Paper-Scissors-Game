let userScore=0;
let systemScore=0;

const choices=document.querySelectorAll(".choice");
const showMsg=document.querySelector(".msg");
let contMsg=document.querySelector(".containerMsg");
const uScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");

const genCompChoice=()=>{ //here we are making system choice by random index choosing b/w 0-2 and passing to select systems choice
    const options=["rock", "paper", "scissors"];
    const index=Math.floor(Math.random()*3); //here we are taking random value b/w 0-1 and converting that value in b/w 0-2
    return options[index]; //passing the random index to option array to get random result
};
const drawGame=()=>{ //function for draw game
    showMsg.innerText="Draw game, Play Again!"; //binding draw to msg box
}
const showUser=(userWin, userChoice, compChoice)=>{ 
    if(userWin){
        userScore++; //counting user score
        uScore.innerText=userScore; //updating the user score
        showMsg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        
    }else{
        systemScore++; //counting system score
        cScore.innerText=systemScore; //updating system score
        showMsg.innerHTML=`You lose! Systems ${compChoice} beats your ${userChoice}`;
    }
}
const playGame=(userChoice)=>{ //function when user palys
    const compChoice=genCompChoice(); //here getting random computer choices

    if(userChoice===compChoice){ //condition checking
        drawGame();
    }else{
        let userWin=true; //suppose user wins
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true; //here we are checking who is the winner user or system
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true; //again same task, checking the winner
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showUser(userWin, userChoice, compChoice); // function to show the result to the user
    }
};
choices.forEach((choice)=>{ // foreach loop to iterate over all choices
    choice.addEventListener("click", ()=>{ //performing event listener of click event
        const userChoice=choice.getAttribute("id");// will get what user has selected as their choice
        playGame(userChoice); //calling palygame function here by passing user choice
    });
});