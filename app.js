// import functions
const animalButton = document.getElementById('animal-button');
const animalDiv = document.getElementById('animal-div');

// console.log(animalDiv.classList);
// grab DOM elements

// set event listeners 
// button.addEventListener('click', () => {
//     sectionEl.classList.toggle('my-style');
// });

animalButton.addEventListener('click', () => {
    animalDiv.classList.toggle('hidden');
    if (animalButton.innerHTML === 'Show Animal') {
        animalButton.innerHTML = 'Hide Animal';
    } else {
        animalButton.innerHTML = 'Hide Animal';
    }
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
