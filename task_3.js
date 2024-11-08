function initLazyLoading() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.add('loaded');

                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazyload').forEach(img => {
        observer.observe(img);
    });
}

window.addEventListener('DOMContentLoaded', initLazyLoading);

function loadImages() {
    document.querySelectorAll('img.lazyload').forEach(img => {
        img.src = img.getAttribute('data-src');
        img.classList.add('loaded');
    });
}
