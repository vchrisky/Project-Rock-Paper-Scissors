function getComputerChoice() {
    choice = Math.floor(Math.random()*3);

    if (choice == 0){
        return "Rock";
    }else if (choice == 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}


let computerScore = 0;
let playerScore = 0;

function playRound(pSelection, cSelection) {

    if (pSelection == "Rock"){
        if (cSelection == "Paper"){
            computerScore++;
            return "You Lose! Paper covers Rock";
        }else if (cSelection == "Scissors"){
            playerScore++;
            return "You Win! Rock breaks Scissors";
        }else if (cSelection == "Rock"){
            return "You Draw! Try Again";
        }
    }else if (pSelection == "Paper"){
        if (cSelection == "Rock"){
            playerScore++;
            return "You Win! Paper covers Rock";
        }else if (cSelection == "Scissors"){
            computerScore++;
            return "You Lose! Scissors cuts Paper";
        }else if(cSelection == "Paper"){
            return "You Draw! Try Again";
        }
    }else if (pSelection == "Scissors"){
        if (cSelection == "Rock"){
            computerScore++;
            return "You Lose! Rock breaks Scissors";
        }else if (cSelection == "Paper"){
            playerScore++;
            return "You Win! Scissors cuts Paper";
        }else if (cSelection == "Scissors"){
            return "You Draw! Try Again";
        }
    }else{
        return "Please enter a valid Rock, Paper, Scissors option!";
    }
}

//This was the previous Iteration where everything was displayed in the console
/*function game(){
    for (let i = 0; (playerScore < 5 && computerScore < 5); i++) {
        let playerOption = prompt("Choose! Rock, Paper, or Scissors", "Rock");
        let playerSelection = playerOption.toLowerCase();
        let computerSelection = getComputerChoice();

        console.log(`You chose ${playerOption} and Computer chose ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
        if (playerScore == 5){
            console.log("**Congratulations! You won Five rounds.**");
        }else if(computerScore == 5){
            console.log("**You Lost! Computer won Five rounds.**");
        }
    }
}

console.log(game());*/
const btnContainer = document.getElementById('buttons');
const rldContainer = document.createElement("div");
const results = document.createElement("div");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const reload = document.createElement("button");

results.classList.add('results');
reload.classList.add('reload');
rldContainer.style.cssText = "margin: 10px 10px;"

btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissors);
rldContainer.appendChild(reload);
document.body.appendChild(rldContainer);
document.body.appendChild(results);


rock.innerText = "ROCK";
paper.textContent = "PAPER";
scissors.textContent = "SCISSORS";
reload.textContent = "PLAY AGAIN";

let displayChoice = document.createElement('div');
let displayResult = document.createElement('div');
let displayScore = document.createElement('div');
results.appendChild(displayChoice);
results.appendChild(displayResult);
results.appendChild(displayScore);

displayScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
gameOver = false;

function playGame(playerSelection, computerSelection){
    if(gameOver == false ){
        displayChoice.textContent = `You chose ${playerSelection} and Computer chose ${computerSelection}`;
        displayResult.textContent = playRound(playerSelection, computerSelection);
        displayScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
       }
    if (playerScore == 5){
        displayChoice.textContent = "**Congratulations! You won Five rounds.**";
        displayResult.textContent = "GAME OVER";
        playerScore = 0;
        computerScore = 0;
        gameOver = true;
    }else if(computerScore == 5){
        displayChoice.textContent = "**You Lost! Computer won Five rounds.**";
        displayResult.textContent = "GAME OVER";
        computerScore = 0;
        playerScore = 0;
        gameOver = true;
    }
}

rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playGame("Rock", computerSelection);
})

paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playGame("Paper", computerSelection);
})

scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playGame("Scissors", computerSelection);
})

reload.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    displayChoice.textContent = "";
    displayResult.textContent = "";
    displayScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    gameOver = false;
})