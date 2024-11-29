function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return choice = prompt("Enter your move : rock, paper or scissors");
}

function gameRules() {
    const moves = ["rock", "paper", "scissors"];
    
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        const humanMove = humanChoice.toLowerCase();
        let result = "";
        switch (humanMove) {
            case computerChoice:
                result = "Draw";
                break;
            case "rock":
                result = (computerChoice === "paper" ? "Paper beats Rock, you lose" : "Rock beats Scissors, you win");
                break;
            case "paper":
                result = (computerChoice === "scissors" ? "Scissors beat Paper, you lose" : "Paper beats Rock, you win");
                break;
            case "scissors":
                result = (computerChoice === "rock" ? "Rock beats Scissors, you lose" : "Scissors beat Paper, you win");
                break;
        }
        return result;
    }
    for (let i = 0; i < 5; i++) {
        const message = playRound(getHumanChoice(), getComputerChoice());
        console.log(message);
    }
}
playGame();
