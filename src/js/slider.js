let index = 0;


const findRadios = document.getElementsByName('slider');
const section = document.getElementById('slider-change');

const radios = Array.from(findRadios);


const findChecked = () => {
    radios.forEach(radio => {
        if(radio.checked){
            index = radio.id;
            let article = document.querySelector(`#slide${index}`);
            article.classList.add('slide-active');
        } else {
            index = radio.id;
            let article = document.querySelector(`#slide${index}`);
            article.classList.remove('slide-active');
        }
    })
}

findChecked(); 
const event = section.addEventListener('change', findChecked);