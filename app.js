// declare two variables to track user and computer score

let userScore = 0;
let compScore = 0;

// declare a variable to track choices

const choices = document.querySelectorAll(".choice");

// access message paragraph

const msg = document.querySelector("#msg");

// Access score board paragraph

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// function to generate computer choice

const genCompChoice = () =>{
    // rock, paper, scissores =>  choices 
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3); // generate any number between 0, 1, 2
    return options[randIdx];
};

// Draw Game Function 

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
};

// show winner
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}
// function for computer to chose rendom choices
const playGame = (userChoice) =>{
    // Generate computer choice
    const compChoice = genCompChoice();
    // compare choices to declare win or draw
    if(userChoice === compChoice){
        // draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // computer choices could be paper or scissors
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // computer choices could be rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // computer choices could be paper or rock
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});