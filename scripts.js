const $form = document.querySelectorAll('form').item(0);
const $today = new Date().toLocaleDateString('pt-Br', {day: 'numeric', month: 'numeric'});

const database = []

function checkIfTheDayIsIncluded() {
    const items = localStorage.getItem('items');

    items ?? localStorage.setItem('items', JSON.stringify([]));

    const dayExist = items.includes($today)

    dayExist ? alert('Este dia já foi adicionado!') : handleRecordMyHabits()
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
    database.push($today)
    localStorage.setItem('items', JSON.stringify(database));
};

const $button = document.getElementById('record-button');
$button.addEventListener("click", checkIfTheDayIsIncluded);


