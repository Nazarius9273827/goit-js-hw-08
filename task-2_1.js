const debounce = _.debounce;

document.addEventListener("DOMContentLoaded", () => {
    const sliderInput = document.querySelector(".slider__input");
    const sliderImage = document.querySelector(".slider__image");
  
    const resizeImage = (value) => {
      const size = 100 + value * 3;
      sliderImage.style.width = `${size}px`;
      sliderImage.style.height = `${size}px`;
    };
  
    const debouncedResizeImage = debounce((value) => {
      resizeImage(value);
    }, 100);
  
    sliderInput.addEventListener("input", (event) => {
      const value = event.target.value;
      debouncedResizeImage(value);
    });
  });