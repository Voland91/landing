let allSections = document.querySelectorAll('section');
// const textPlace = document.querySelector('.all-sections');

const sections = Array.from(allSections);
let numberOfPages = `${sections.length}`; 



const addingAllSectionsNumbers = () => {

    sections.forEach(section => {
        const numberOfAllSections = section.querySelector('.all-sections');
        const numberOfCurrentSection = section.querySelector('.current-section');
        numberOfAllSections.textContent = numberOfPages;
        numberOfCurrentSection.textContent = sections.indexOf(section) + 1;
    })
    
}





addingAllSectionsNumbers();