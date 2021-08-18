// adding changes (bg color, diff width, etc.) to navbar
const nav = document.querySelector("nav");

window.onscroll = () => {
    window.scrollY > 100 ? nav.classList.add('nav-active') : nav.classList.remove('nav-active')
}