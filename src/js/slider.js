const index = 1;

const article = document.querySelector(`#slide${index}`);
const radio = document.getElementsByClassName("radio-input");

const slide = (id) => {
    radio.find(radio.checked === true)
}