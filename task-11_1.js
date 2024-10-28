function startHourTimer() {
    let timeLeft = 60 * 60;
    const hourTimer = document.getElementById("hourTimer");
    const startHourButton = document.getElementById("startHourButton");

    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        hourTimer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft === 30 * 60) {
            alert("Залишилось менше половини часу!");
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            startHourButton.disabled = false;
            hourTimer.textContent = "Час вийшов!";
        } else {
            timeLeft -= 60;
        }
    }, 60000);
}

document.getElementById("startHourButton").onclick = () => {
    startHourButton.disabled = true;
    startHourTimer();
};