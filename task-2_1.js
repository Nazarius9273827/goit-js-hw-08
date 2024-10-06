function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function resizeImage(event) {
    const sliderValue = event.target.value;
    const image = document.querySelector('.slider__image');

    image.style.width = `${sliderValue}%`;
}

const debouncedResizeImage = debounce(resizeImage, 300);


document.querySelector('.slider__input').addEventListener('input', debouncedResizeImage);
