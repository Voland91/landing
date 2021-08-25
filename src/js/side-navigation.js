let allSections = document.querySelectorAll('section');
// const textPlace = document.querySelector('.all-sections');

const sections = Array.from(allSections);
let numberOfPages = `${sections.length}`; 



const addingAllSectionsNumbers = () => {
    const numberOfAllSections = document.querySelector('.all-sections');
    numberOfAllSections.textContent = numberOfPages;
}





addingAllSectionsNumbers();