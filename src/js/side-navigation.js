let allSections = document.querySelectorAll('section');

const sections = Array.from(allSections);
let numberOfPages = `${sections.length}`; 



const addingAllSectionsNumbers = () => {

    sections.forEach((section, index) => {
        const numberOfAllSections = section.querySelector('.all-sections');
        const numberOfCurrentSection = section.querySelector('.current-section');
        const arrowUpLink = section.querySelector('.arrow__up');
        const arrowDownLink = section.querySelector('.arrow__down');
        const linkUp = section.querySelector('.link-up');
        const linkDown = section.querySelector('.link-down');

        (sections[index - 1]) ? (linkUp.href = `#${sections[index - 1].id}`) : arrowUpLink.classList.add('arrow__hidden');
        (sections[index + 1]) ? (linkDown.href = `#${sections[index + 1].id}`) : arrowDownLink.classList.add('arrow__hidden');
         
        numberOfAllSections.textContent = numberOfPages;
        numberOfCurrentSection.textContent = index + 1;
    })
}

addingAllSectionsNumbers();