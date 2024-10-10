let score = 0;
let gameInterval;
let countdown = 30;

const scoreBoard = document.getElementById("score-board");
const startButton = document.getElementById("start-button");
const gameContainer = document.getElementById("game-container");

startButton.addEventListener("click", () => {
    score = 0;
    countdown = 30;
    scoreBoard.textContent = `Очки: ${score}`;
    startButton.disabled = true;

    startGame();
});

function startGame() {
    const timer = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(timer);
            clearInterval(gameInterval);
            endGame();
        }
    }, 1000);

    gameInterval = setInterval(() => {
        createTarget();
    }, 800);
}


function createTarget() {
    const target = document.createElement("div");
    target.classList.add("target");

    const x = Math.random() * (gameContainer.clientWidth - 50);
    const y = Math.random() * (gameContainer.clientHeight - 50);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    target.addEventListener("click", () => {
        score++;
        scoreBoard.textContent = `Очки: ${score}`;
        gameContainer.removeChild(target);
    });

    gameContainer.appendChild(target);

    setTimeout(() => {
        if (gameContainer.contains(target)) {
            gameContainer.removeChild(target);
        }
    }, 2000);
}

function endGame() {
    alert(`Гру завершено! Ваші очки: ${score}`);
    startButton.disabled = false;
    gameContainer.innerHTML = "";
}