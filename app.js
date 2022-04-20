// import functions
const button = document.getElementById('button');
const nameEl = document.getElementById('name');
const sectionEl = document.getElementById('my-info');
const animalButton = document.getElementById('animal-button');
const animalDiv = document.getElementById('animal-div');

// console.log(animalDiv.classList);
// grab DOM elements

// set event listeners 
button.addEventListener('click', () => {
    if (nameEl.textContent === '___') {
        nameEl.textContent = 'Indio';
    } else {
        nameEl.textContent = '___';
    }
    sectionEl.classList.toggle('my-style');
});

animalButton.addEventListener('click', () => {
    animalDiv.classList.remove('hidden');
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
