function startMillisecondTimer() {
    let timeLeft = 30 * 1000;
    const timerDisplay = document.getElementById("timerDisplay");
    const startButton = document.getElementById("startButton");

    const timerInterval = setInterval(() => {
        let seconds = Math.floor(timeLeft / 1000);
        let milliseconds = timeLeft % 1000;

        timerDisplay.textContent = `${seconds}:${milliseconds < 100 ? '0' : ''}${milliseconds}`;

        if (timeLeft === 10 * 1000) {
            timerDisplay.classList.add("highlight");
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            startButton.disabled = false;
            timerDisplay.textContent = "Час вийшов!";
        } else {
            timeLeft -= 10;
        }
    }, 10);
}

document.getElementById("startButton").onclick = () => {
    startButton.disabled = true;
    timerDisplay.classList.remove("highlight");
    startMillisecondTimer();
};
