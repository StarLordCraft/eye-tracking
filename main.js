const olhos = [...document.querySelectorAll('img')];

let posXMouse = 0;
let posYMouse = 0;

window.addEventListener('mousemove', (evt) => {
    posXMouse = evt.clientX;
    posYMouse = evt.clientY;

    const angle = (Math.atan2(posYMouse, posXMouse) * 180 / Math.PI);

    olhos.forEach((eye) => {
        eye.style.transform = `rotate(${angle}deg)`;
    })    
})