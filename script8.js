let userWins = 0;
let computerWins = 0;
let userName = "User";

document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    let userInput = prompt("Enter your name:");
    if (userInput !== null && userInput.length > 0) {
        userName = userInput;
    }
    document.querySelector('#user h2').textContent = userName;
    document.querySelector("#user .score").textContent = '0';
    document.querySelector("#computer .score").textContent = '0';
    document.querySelector("#user .result").textContent = '';
    document.querySelector("#computer .result").textContent = '';
    playGame();
}

function playGame() {
    let roundWinner = '';

    function playRound() {
        if (userWins < 3 && computerWins < 3) {
            const userNumber = Math.floor(Math.random() * 6) + 1;
            const computerNumber = Math.floor(Math.random() * 6) + 1;

            if (userNumber > computerNumber) {
                roundWinner = userName;
                userWins++;
            } else if (userNumber < computerNumber) {
                roundWinner = "Computer";
                computerWins++;
            }

            document.querySelector("#user .score").textContent = userWins;
            document.querySelector("#computer .score").textContent = computerWins;

            document.querySelector("#user .result").textContent = userNumber;
            document.querySelector("#computer .result").textContent = computerNumber;

            if (userWins < 3 && computerWins < 3) {
                setTimeout(playRound, 2000); // Wait for 2 seconds before the next round.
            } else {
                setTimeout(endGame, 1000);
            }
        }
    }

    playRound();
}

function endGame() {
    if (userWins === 3) {
        alert(`${userName} won the game!`);
        resetGame();
    } else if (computerWins === 3) {
        alert("Computer won the game!");
        resetGame();
    }
}

function resetGame() {
    userWins = 0;
    computerWins = 0;
    document.querySelector("#user .score").textContent = '0';
    document.querySelector("#computer .score").textContent = '0';
    document.querySelector("#user .result").textContent = '';
    document.querySelector("#computer .result").textContent = '';
}
