let counter = 0;

const intervalId = setInterval(() => {
    console.log(`Повідомлення ${counter + 1}`);
    counter++;

    if (counter === 5) {
        clearInterval(intervalId);
        console.log("Інтервал завершено.");
    }
}, 1000);