let score = 0;
let lives = 3;
const word = "SYNTH";
let guessedLetters = [];

function submitPrediction() {
    const prediction = document.getElementById("prediction").value.toUpperCase();
    const message = document.getElementById("message");

    if (prediction.length === 1) {
        if (word.includes(prediction) && !guessedLetters.includes(prediction)) {
            guessedLetters.push(prediction);
            score += 20;
            message.innerText = `Correct! You guessed the letter: ${prediction}`;
        } else {
            lives--;
            message.innerText = `Wrong guess! You lost a life.`;
        }
    } else if (prediction.length === word.length) {
        if (prediction === word) {
            message.innerText = `Congratulations! You guessed the word: ${word}`;
            score += 100;
        } else {
            message.innerText = `Wrong word! You lost the game.`;
            lives = 0;
        }
    } else {
        message.innerText = `Please enter a valid letter or word.`;
    }

    updateGameStatus();
}

function updateGameStatus() {
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("lives").innerText = `Lives: ${'❤️'.repeat(lives)}`;

    if (lives <= 0) {
        alert("Game Over! You lost.");
        resetGame();
    }
}

function resetGame() {
    score = 0;
    lives = 
