let size = 50;
let position = 0;

const animateBox1 = setInterval(() => {
    const box1 = document.getElementById("box1");
    size += 5;
    box1.style.width = size + "px";
    box1.style.height = size + "px";

    if (size > 150) {
        clearInterval(animateBox1);
    }
}, 200);

const animateBox2 = setInterval(() => {
    const box2 = document.getElementById("box2");
    position += 10;
    box2.style.transform = `translateX(${position}px)`;

    if (position > 300) {
        clearInterval(animateBox2);
    }
}, 100);

const animateBox3 = setInterval(() => {
    const box3 = document.getElementById("box3");
    box3.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                      ${Math.floor(Math.random() * 256)}, 
                                      ${Math.floor(Math.random() * 256)})`;

    if (position > 200) {
        clearInterval(animateBox3);
    }
}, 300);