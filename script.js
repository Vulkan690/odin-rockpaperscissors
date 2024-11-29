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
    let previousScore = [0, 0];
    function showResultMessage(result) {
        switch (result) {
            case 0:
                console.log("Draw");
                break;
            case 1:
                console.log("Loss");
                break;
            case 2:
                console.log("win");
                break;
        }
    }
    function playRound(computerChoice, humanChoice) {
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
        return [computerScore, humanScore, computerChoice, humanChoice];
    }
    for (let i = 0; i < 5; i++) {
        const roundResult = playRound(getHumanChoice(), getComputerChoice());
        if (roundResult[0] > previousScore[0]) {
            showResultMessage(1);
        } else if (roundResult[1] > previousScore[1]) {
            showResultMessage(2);
        } else {
            showResultMessage(0);
        }
        previousScore = [roundResult[0], roundResult[1]];
    }
}
playGame();
