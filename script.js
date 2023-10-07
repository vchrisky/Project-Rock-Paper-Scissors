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
const results = document.createElement("div");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const reload = document.createElement("button");

btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissors);
btnContainer.appendChild(reload);
document.body.appendChild(results);


rock.innerText = "ROCK";
paper.textContent = "PAPER";
scissors.textContent = "SCISSORS";
reload.textContent = "RELOAD";

let displayChoice = document.createElement('div');
let displayResult = document.createElement('div');
let displayScore = document.createElement('div');
results.appendChild(displayChoice);
results.appendChild(displayResult);
results.appendChild(displayScore);

displayScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;


rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice();

    if (playerScore == 5){
        results.textContent = "**Congratulations! You won Five rounds.**";
    }else if(computerScore == 5){
        results.textContent = "**You Lost! Computer won Five rounds.**";
    }else{
        displayChoice.textContent = `You chose Rock and Computer chose ${computerSelection}`;
        displayResult.textContent = playRound("Rock", computerSelection);
        displayScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    }
        
});
paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice();

    if (playerScore == 5){
        results.textContent = "**Congratulations! You won Five rounds.**";
    }else if(computerScore == 5){
        results.textContent = "**You Lost! Computer won Five rounds.**";
    }else{
        displayChoice.textContent = `You chose Paper and Computer chose ${computerSelection}`;
        displayResult.textContent = playRound("Paper", computerSelection);
        displayScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    }
});
scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice();

    if (playerScore == 5){
        results.textContent = "**Congratulations! You won Five rounds.**";
    }else if(computerScore == 5){
        results.textContent = "**You Lost! Computer won Five rounds.**";
    }else{
        displayChoice.textContent = `You chose Scissors and Computer chose ${computerSelection}`;
        displayResult.textContent = playRound("Scissors", computerSelection);
        displayScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    }
});
reload.addEventListener("click", () => {
    reload.innerHTML = "<a href='#index.html'>Reload</a>";
})