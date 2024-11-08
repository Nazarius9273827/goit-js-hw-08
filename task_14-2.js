function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

const promises = [
    randomDelay("Проміс 1"),
    randomDelay("Проміс 2"),
    randomDelay("Проміс 3"),
    randomDelay("Проміс 4"),
    randomDelay("Проміс 5")
];

Promise.race(promises)
    .then(result => {
        console.log("Найшвидший проміс вирішено з результатом:", result);
    })
    .catch(error => {
        console.error("Виникла помилка:", error);
    });
