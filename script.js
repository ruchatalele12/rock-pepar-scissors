let userscore = 0;
let compscore = 0;

const choices= document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscorepara =document.querySelector("#user_score");
const compscorepara =document.querySelector("#comp_score");

const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * options.length);
    return options[randidx];
};
const drawGame=()=>{
    msg.innerText="Game was draw";
    // msg.style.backgroundColor="red";
};
const showwinner=(userwin , userChoice,compChoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else {
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
    console.log("user choise:",userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice:", compChoice);

    if (userChoice === compChoice){
        drawGame();
    }
    else {
        let userwin = true;
        if(userChoice==="rock"){
            userwin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userwin=compChoice==="scissors" ? false:true;
        }else {
            userwin= compChoice==="rock" ? false:true;
        }
        showwinner(userwin , userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        
            playgame(userChoice);
    });
});




