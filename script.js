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

let computerSelection = getComputerChoice();
let playerSelection = prompt("What is your choice?", "")
console.log(`Computer chooses ${computerSelection}`);

function playRound(pSelection, cSelection) {
    choice = pSelection.toLowerCase();

    if (choice == "rock"){
        if (cSelection == "Paper"){
            return "You Lose! Paper covers Rock";
        }else if (cSelection == "Scissors"){
            return "You Win! Rock breaks Scissors";
        }else if (cSelection == "Rock"){ 
            return "You Draw! Try Again";
        }
    }else if (choice == "paper"){
        if (cSelection == "Rock"){
            return "You Win! Paper covers Rock";
        }else if (cSelection == "Scissors"){
            return "You Lose! Scissors cuts Paper";
        }else if(cSelection == "Paper"){
            return "You Draw! Try Again";
        }
    }else if (choice == "scissors"){
        if (cSelection == "Rock"){
            return "You Lose! Rock breaks Scissors";
        }else if (cSelection == "Paper"){
            return "You Win! Scissors cuts Paper";
        }else if (cSelection == "Scissors"){
            return "You Draw! Try Again";
        }
    }else{
        return "Please enter a valid Rock, Paper, Scissors option!";
    }
}

console.log(playRound(playerSelection, computerSelection));

