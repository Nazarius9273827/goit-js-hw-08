const box = document.getElementById('box');

function moveBox(event) {
  box.style.left = event.clientX + 'px';
  box.style.top = event.clientY + 'px';
}

const debouncedMove = _.debounce(moveBox, 100);

document.addEventListener('mousemove', debouncedMove);