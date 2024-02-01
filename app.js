let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");

const geneCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=>{
    console.log("Game was draw")
    msg.innerText = "Game was Draw, Play Again..";
    msg.style.backgroundColor= "#081b31";
}
const showWinner = (userwin, userChoice , compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
    console.log("You Win..!!")
    msg.innerText =  `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    } else {
        comScore++;
        comScorePara.innerText = comScore;
        console.log("you lose..!!")
        msg.innerText = `You lose! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red"; 
    }
}

const playGame = (userChoice)=> {
    console.log("userChoice =", userChoice);
    // Generate computers choice
    const compChoice = geneCompChoice();
    console.log("compChoice =", compChoice);

    if(userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userwin = true;
        if(userChoice === "rock") {
            //scissors , peper
            userwin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper") {
            //rock,scissors
            userwin = compChoice === "scissors"? false : true;
        } else {
            if(userChoice=== "scissors") {
                //rock,peper
                userwin= compChoice === "rock"? false : true;
            }
            
        }
        showWinner(userwin,userChoice,compChoice)

    }
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});