let openIcon = document.getElementById(`burger`);
let closeIcon = document.getElementById(`close`);
let navigation = document.getElementById(`nav`);

const showBurgerMenu = () => {
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    navigation.classList.add('nav--burger')
}

const closeBurgerMenu= () => {
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    navigation.classList.remove('nav--burger')
}

openIcon.addEventListener('click', showBurgerMenu);
closeIcon.addEventListener('click', closeBurgerMenu)