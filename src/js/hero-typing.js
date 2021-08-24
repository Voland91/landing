const textPlace = document.querySelector('.hero-text');
const cursor = document.querySelector('.hero-cursor');

//this is text you want to type in hero h2
const txt = "infinity-group";

let indexText = 0;

const addLetter = () => {
    textPlace.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    cursor.classList.toggle('active-cursor');
}

const indexTyping = setInterval(addLetter, 170);
setInterval(cursorAnimation, 500);