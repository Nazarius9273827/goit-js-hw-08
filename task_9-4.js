const inputField = document.getElementById("timer-input");
const beginButton = document.getElementById("timer-start-button");
const messageDiv = document.getElementById("message");

beginButton.addEventListener("click", () => {
    messageDiv.textContent = "";

    const userTime = parseInt(inputField.value, 10);

    if (isNaN(userTime) || userTime <= 0) {
        alert("Будь ласка, введіть коректний час у секундах (позитивне число).");
        return;
    }

    messageDiv.textContent = `Таймер запущено на ${userTime} секунд...`;

    setTimeout(() => {
        messageDiv.textContent = `Час вичерпано! Минуло ${userTime} секунд.`;
    }, userTime * 1000);
});