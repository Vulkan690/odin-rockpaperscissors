function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return choice = prompt("Enter your move : rock, paper or scissors");
}

// function gameRules() {
//     const moves = ["rock", "paper", "scissors"];
    
// }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        const previousScore = [computerScore, humanScore];
        const humanMove = humanChoice.toLowerCase();
        let result = "";
        switch (humanMove) {
            case computerChoice:
                result = `${humanMove} against ${computerChoice}, it's a draw.`;
                break;
            case "rock":
                computerChoice === "paper" ? computerScore++ : humanScore++;
                break;
            case "paper":
                computerChoice === "scissors" ? computerScore++ : humanScore++;
                break;
            case "scissors":
                computerChoice === "rock" ? computerScore++ : humanScore++;
                break;
        }
        const newScore = [computerScore, humanScore];
        for (let i = 0; i < 2; i++) {
            previousScore[i]
        }
        return [computerScore, humanScore];
    }
    for (let i = 0; i < 5; i++) {
        const message = playRound(getHumanChoice(), getComputerChoice());
        console.log(message);
    }
}
playGame();
