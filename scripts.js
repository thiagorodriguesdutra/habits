const $form = document.querySelectorAll('form').item(0);
const $today = new Date().toLocaleDateString('pt-Br', {day: 'numeric', month: 'numeric'});
const registredHabits = [];

function checkIfTheDayIsIncluded() {
    const dayAlreadyIncluded = registredHabits.includes($today.toString());

    if(dayAlreadyIncluded) {
        alert('Você já incluiu este dia!');
    } else {
        registredHabits.push($today);
        handleRecordMyHabits();
    }
}

function handleRecordMyHabits() {
    const habitsQuantity = [1, 2, 3, 4, 5, 6];
    const container = $form.appendChild(document.createElement('div'));

    container.classList.add('check-habits');

    habitsQuantity.forEach(habit => {
        container
        .appendChild(document.createElement('div'))
        .appendChild(document.createElement('input')).setAttribute('type', 'checkbox');
        container.lastElementChild.classList.add('checkmark');
    });
    
    container.insertAdjacentHTML('beforeend', `<div class="date">${$today}</div>`);
};

const $button = document.getElementById('record-button');
$button.addEventListener("click", checkIfTheDayIsIncluded);


