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

    if (pSelection == "rock"){
        if (cSelection == "Paper"){
            computerScore++;
            return "You Lose! Paper covers Rock";
        }else if (cSelection == "Scissors"){
            playerScore++;
            return "You Win! Rock breaks Scissors";
        }else if (cSelection == "Rock"){
            return "You Draw! Try Again";
        }
    }else if (pSelection == "paper"){
        if (cSelection == "Rock"){
            playerScore++;
            return "You Win! Paper covers Rock";
        }else if (cSelection == "Scissors"){
            computerScore++;
            return "You Lose! Scissors cuts Paper";
        }else if(cSelection == "Paper"){
            return "You Draw! Try Again";
        }
    }else if (pSelection == "scissors"){
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


function game(){
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

console.log(game());
