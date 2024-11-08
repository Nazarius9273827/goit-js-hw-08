// Функція, яка повертає проміс з затримкою
function delayedPromise(value, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

const promises = [
    delayedPromise("Проміс 1", 1000),
    delayedPromise("Проміс 2", 500),
    delayedPromise("Проміс 3", 1500),
    delayedPromise("Проміс 4", 2000),
    delayedPromise("Проміс 5", 800)
];

Promise.all(promises)
    .then(results => {
        console.log("Результати вирішення всіх промісів:", results);
    })
    .catch(error => {
        console.error("Виникла помилка:", error);
    });
